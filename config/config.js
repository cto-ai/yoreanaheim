const { sdk } = require('@cto.ai/sdk')

async function setDBConfig() {
  var username = await sdk.getSecret('ZILLOW-USERNAME')
  var password = await sdk.getSecret('ZILLOW-PASS')
  var database = await sdk.getSecret('ZILLOW-DB')
  var host = await sdk.getSecret('ZILLOW-HOST')

  return {
    development: {
      username: username["ZILLOW-USERNAME"],
      password: password["ZILLOW-PASS"],
      database: database["ZILLOW-DB"],
      host: host["ZILLOW-HOST"],
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
      username: username["ZILLOW-USERNAME"],
      password: password["ZILLOW-PASS"],
      database: database["ZILLOW-DB"],
      host: host["ZILLOW-HOST"],
      dialect: 'postgres',
      protocol: "postgres",
      dialectOptions: {
        ssl: {
          require: true
        }
      }
    }
  };
}

module.exports = setDBConfig()