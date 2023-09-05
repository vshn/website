# Step 1: Builder image
FROM docker.io/library/node:16.20.2-alpine3.17 AS builder
COPY ["redirects.json", "gatsby-browser.js", "gatsby-config.js", "gatsby-node.js", "gatsby-ssr.js", "package.json", "package-lock.json", "/build/"]
COPY src /build/src
COPY static /build/static
WORKDIR /build
RUN npm install
RUN npm run build:website

# Step 2: Runtime image
FROM ghcr.io/vshn/nginx:1.25.1
COPY --from=builder /build/public /usr/share/nginx/html
