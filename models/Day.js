
import Doctor from "./Doctor.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Day = db.define(
  "Day",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
  },
  {

    freezeTableName: true
  }
);



// Export model Product
export default Day;
