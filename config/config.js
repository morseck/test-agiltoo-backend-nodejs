module.exports = {
  "development": {
    "username": "xqtzplyavwacrg",
    "password": '35168f9c974d0c4c3bcd71faa6e3c6a58125a4045fc9de8d27d43f90b3276492',
    "database": "d69jjqbqeeo6tq",
    "host": "ec2-54-172-175-251.compute-1.amazonaws.com",
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
    "dialect": process.env.DB_DIALECT || "postgres"
  },
  "production": {
    "username": process.env.DB_USERNAME || "postgres",
    "password": process.env.DB_PASSWORD || 'postgres',
    "database": process.env.DB_NAME || "postgres",
    "host": process.env.DB_HOST || "127.0.0.1",
    "dialect": process.env.DB_DIALECT || "postgres"
  }
}
