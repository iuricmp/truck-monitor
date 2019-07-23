FROM node:11.1-slim

# Update image and install dependencies
RUN set -x \
  && apt-get update \
  && apt-get install -y build-essential git --no-install-recommends \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN yarn global add serve

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV
ENV APP_DIR /usr/src/app

RUN mkdir -p ${APP_DIR}
ADD package.json ${APP_DIR}
ADD yarn.lock ${APP_DIR}

WORKDIR ${APP_DIR}

RUN yarn

ADD . ${APP_DIR}
