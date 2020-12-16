FROM node:current-slim

RUN mkdir -p /opt
COPY . /opt/
WORKDIR /opt

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm install && chown -R node /opt

USER node

RUN npx next build

EXPOSE 3000
CMD npx next start
