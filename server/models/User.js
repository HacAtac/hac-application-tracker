const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create our User model
//basically class User extends Model {} is used so that we can access all the methods of Model (ie. .findAll())
class User extends Model {} //extends Model class from the Sequelize library

//define table columns and configs
User.init(
  {
    //TABLE COLUMN DEFS GO HERE
    //define an id column, mySql doesnt auto gen an id for us, so we need to do it
    id: {
      // use the special Sequelize DataTypes object provide what type of data this column is
      type: DataTypes.INTEGER,
      // this is the equivalent of SQL's `NOT NULL` option
      allowNull: false,
      // instruct that this is the Primary Key
      primaryKey: true,
      // turn on auto incrementing
      autoIncrement: true,
    },
    //define a username column
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    //define an email column
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      //there cannot be any duplicate emails
      unique: true,
      // if allowNull is false, we can run our data through validators b4 creating the table data
      validate: {
        isEmail: true,
      },
    },
    //define a password column
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        //this means the pass must be at least four characters long
        len: [4],
      },
    },
  },
  {
    //TABLE CONFIS OPTIONS GO HERE (https://sequelize.org/v5/manual/models-definition.html#configuration))

    //pass in our imported sequelize connecion (the direct connection to our db)
    sequelize,
    //dont auto create createdAt/updatedAt timestamp fields
    timestamps: false,
    //dont pluralize table names
    freezeTableName: true,
    // use underscores insted of camel-casing
    underscored: true,
    //make it so our model name stays lowercase in the db
    modelName: "user",
  }
);

module.exports = User;
