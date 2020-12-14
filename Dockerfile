FROM node:12-slim

# Install libs, create working dir, and set the internal npm registry
RUN apt-get update && \
    apt-get install -y --force-yes --no-install-recommends libpq-dev && \
    apt-get clean && apt-get autoclean && \
    mkdir -p /app 


# Set working dir
WORKDIR /app

# Add app code
COPY . /app

# Install modules
RUN npm install --production

# Run Migrations
# RUN npx sequelize db:migrate && \
    # npx sequelize db:seed:all

CMD ["npm", "start"]