FROM registry.cto.ai/official_images/node:2-12.13.1-stretch-slim 

ENV NODE_ENV="production"
ENV DATABASE_URL="postgres://{DB_USER}:{DB_PASS}@{DB_HOST}:5432/{DB_DATABASE}"

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