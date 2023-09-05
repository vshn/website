# Step 1: Builder image
FROM docker.io/library/node:16.20.2-alpine3.17 AS builder
COPY ["redirects.json", "gatsby-browser.js", "gatsby-config.js", "gatsby-node.js", "gatsby-ssr.js", "package.json", "package-lock.json", "/build/"]
COPY src /build/src
COPY static /build/static
WORKDIR /build
RUN npm install
RUN --mount=type=secret,id=WP_GRAPHQL_URL \
    --mount=type=secret,id=GATSBY_DEFAULT_SITE_URL \
    --mount=type=secret,id=GATSBY_CONCURRENT_DOWNLOAD \
    --mount=type=secret,id=WP_HTACCESS_USERNAME \
    --mount=type=secret,id=WP_HTACCESS_PASSWORD \
    export WP_GRAPHQL_URL=$(cat /run/secrets/WP_GRAPHQL_URL) && \
    export GATSBY_DEFAULT_SITE_URL=$(cat /run/secrets/GATSBY_DEFAULT_SITE_URL) && \
    export GATSBY_CONCURRENT_DOWNLOAD=$(cat /run/secrets/GATSBY_CONCURRENT_DOWNLOAD) && \
    export WP_HTACCESS_USERNAME=$(cat /run/secrets/WP_HTACCESS_USERNAME) && \
    export WP_HTACCESS_PASSWORD=$(cat /run/secrets/WP_HTACCESS_PASSWORD) && \
    npm run build:website

# Step 2: Runtime image
FROM ghcr.io/vshn/nginx:1.25.1
COPY --from=builder /build/public /usr/share/nginx/html
