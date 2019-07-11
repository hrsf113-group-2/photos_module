const Sequelize = require('sequelize');

const { DB_USER, DB_PASS } = process.env;

const sequelize = new Sequelize(null, DB_USER, DB_PASS, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
  logging: false,
  pool: {
    max: 5,
    idle: 30000,
    acquire: 60000,
  },
});

module.exports = sequelize;
