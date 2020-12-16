const fs = require('fs');
const sdk = require('@cto.ai/sdk')

module.exports = {
  development: {
    username: sdk.getSecret('ZILLOW-USERNAME'),
    password: sdk.getSecret('ZILLOW-PASS'),
    database: sdk.getSecret('ZILLOW-DB'),
    host: sdk.getSecret('ZILLOW-HOST'),
    dialect: 'postgres',
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  },
  test: {
    username: 'database_test',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql'
  },
  production: {
    username: sdk.getSecret('ZILLOW-USERNAME'),
    password: sdk.getSecret('ZILLOW-PASS'),
    database: sdk.getSecret('ZILLOW-DB'),
    host: sdk.getSecret('ZILLOW-HOST'),
    dialect: 'postgres',
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true
      }
    }
  }
};