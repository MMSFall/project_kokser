const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('kokser_db', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = { sequelize };
