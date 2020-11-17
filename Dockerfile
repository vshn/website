FROM docker.io/node:12.14.0-alpine3.11 AS builder

WORKDIR /app

# Install dependencies
RUN apk add --no-cache \
      autoconf \
      automake \
      libtool \
      make \
      tiff \
      jpeg \
      zlib \
      zlib-dev \
      pkgconf \
      nasm \
      file \
      gcc \
      musl-dev
COPY package*.json ./
RUN npm install

# Build website
ENV GATSBY_DEFAULT_SITE_URL=http://localhost
COPY . .
RUN npm run build:website

# Execution image
FROM docker.io/bitnami/nginx:latest AS runtime
COPY --from=builder /app/public /app
