const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Application extends Model {}

Application.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    jobname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobtype: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    joblocation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    jobdescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appsubmit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appstatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    appnotes: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    // TABLE CONFIGURATION OPTIONS
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "application",
  }
);

module.exports = Application;
