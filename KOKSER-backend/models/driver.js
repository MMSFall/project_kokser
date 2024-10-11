const { DataTypes } = require('sequelize');
const { sequelize } = require('../config');

const Driver = sequelize.define('Driver', {
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  licenseNumber: { type: DataTypes.STRING, allowNull: false },
  registrationNumber: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false, defaultValue: 'driver' }
});

module.exports = Driver;
