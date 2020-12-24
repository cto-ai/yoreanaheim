FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim 

WORKDIR /ops

USER root
RUN apt-get update && \
    apt-get install -y --force-yes --no-install-recommends gcc make libpng-dev && \
    apt-get clean && apt-get autoclean && \
    mkdir -p /app 

ADD package.json .
RUN npm install --production

ADD . .

# Run Migrations
# RUN npx sequelize db:migrate && \
    # npx sequelize db:seed:all