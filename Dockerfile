# build environment
FROM keymetrics/pm2:13-slim
WORKDIR /build

RUN npm install -g serve
COPY /build build/
COPY /config/out.env .env
COPY ecosystem.config.js .

EXPOSE 5000
CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]