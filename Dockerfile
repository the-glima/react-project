# pull official base image
FROM node:14-alpine AS builder

# install global yarn
RUN apk add --no-cache --virtual .build-deps \
  ca-certificates \
  wget \
  tar && \
  cd /usr/local/bin && \
  wget https://yarnpkg.com/latest.tar.gz && \
  tar zvxf latest.tar.gz && \
  ln -s /usr/local/bin/dist/bin/yarn.js /usr/local/bin/yarn.js && \
  apk del .build-deps

WORKDIR /app
COPY . .
RUN yarn
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8080", "-s", "."]
