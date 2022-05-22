FROM node:alpine

RUN apk add --no-cache curl
RUN apk add --no-cache git
RUN apk add --no-cache bash

RUN npm i -g pnpm

WORKDIR /usr/app/

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

COPY apps/backend/package.json ./apps/backend/

COPY packages/api/package.json ./packages/api/
COPY packages/config/package.json ./packages/config/
COPY packages/environment/package.json ./packages/environment/

RUN pnpm install

COPY . .

CMD pnpm deploy
