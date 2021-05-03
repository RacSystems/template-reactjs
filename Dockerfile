FROM node:14.16.0-alpine

USER node

WORKDIR /home/node/app

COPY . .

ENTRYPOINT [ ".docker/entrypoint.sh" ]
