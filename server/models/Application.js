const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

// create Application model
class Application extends Model {}
Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    interviewDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    contactEmail: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactPhone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    contactName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    followDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  { sequelize, modelName: 'application' }
)

module.exports = Application
