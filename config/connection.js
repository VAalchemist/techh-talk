const Sequelize = require('sequelize');
require('dotenv').config();

// creating connection to db

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

sequelize.authenticate().then(() => {
  console.log("connection successful!");
}).catch((err) => {
  console.log(":( NO success connecting to db!");
});

module.exports = sequelize;
