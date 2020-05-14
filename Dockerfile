# pull official base image
FROM node:14-alpine

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

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# add app
COPY . .

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install --frozen-lockfile
RUN yarn global add serve

# start app
CMD ["serve", "-p", "3000", "-s", "."]
