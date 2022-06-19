const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/config')

// create Application model
class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    CompanyName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    InterviewDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    InterviewTime: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    InterviewLocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    DateApplied: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    FollowUp: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    hooks: {},
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Application',
  }
)

module.exports = Application
