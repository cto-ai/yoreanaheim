FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim 

ENV NODE_ENV="production"

WORKDIR /ops

# USER root
RUN apt-get update && \
    apt-get install -y --force-yes --no-install-recommends gcc make libpng-dev git && \
    apt-get clean && apt-get autoclean && \
    mkdir -p /app 

ADD package.json .
RUN npm install --production
ADD . .
RUN npm run build



# Run Migrations
# Note that exit 0 is to avoid migrations already been run errors for now
RUN npx sequelize db:migrate && \
    npx sequelize db:seed:all; exit 0
