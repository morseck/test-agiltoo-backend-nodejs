module.exports = {
  "development": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": process.env.DB_NAME || "postgres",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  },
  "test": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": process.env.DB_NAME || "postgres",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  },
  "production": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": process.env.DB_NAME || "postgres",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "postgres",
    dialectOptions: {
      ssl: {
        require: true, // This will help you. But you will see nwe error
        rejectUnauthorized: false // This line will fix new error
      }
    },
  }
}
