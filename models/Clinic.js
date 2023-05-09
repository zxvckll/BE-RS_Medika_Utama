import Polyclinic from "./Polyclinic.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Clinic = db.define(
  "Clinic",
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
Polyclinic.hasMany(Clinic);
Clinic.belongsTo(Polyclinic);
// Export model Product
export default Clinic;
