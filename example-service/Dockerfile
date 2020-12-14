############################
# Final container
############################
FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim 

WORKDIR /ops

ADD example-service/package.json .
RUN npm install

# Add app code
ADD ./example-service .

FROM node:12-slim

# Install libs, create working dir, and set the internal npm registry
RUN apt-get update && \
    apt-get install -y --force-yes --no-install-recommends libpq-dev && \
    apt-get clean && apt-get autoclean && \
    mkdir -p /app 

# Set working dir
WORKDIR /app

# Install packages
COPY package.json .
RUN npm install --production

# Add app code
COPY . /app

# Run Migrations
# RUN npx sequelize db:migrate && \
    # npx sequelize db:seed:all