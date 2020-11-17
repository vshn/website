FROM docker.io/node:14-slim AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Build website
ENV GATSBY_TELEMETRY_DISABLED=1
ENV GATSBY_DEFAULT_SITE_URL=http://localhost
ENV WP_GRAPHQL_URL=https://vshn.cyon.site/graphql
ARG WP_HTACCESS_USERNAME=vshn
ARG WP_HTACCESS_PASSWORD
COPY . .
RUN npm run build:website

# Execution image
FROM docker.io/bitnami/nginx:latest AS runtime
COPY --from=builder /app/public /app
