
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Patient = db.define(
  "Patient",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
    noRM: {
      type: DataTypes.INTEGER,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    dateOfBirth: {
      type: DataTypes.STRING,
    },
    citizenship: {
      type: DataTypes.STRING,
    },
  },
  {

    freezeTableName: true
  }
);

// Export model Product
export default Patient;
