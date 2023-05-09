
import Clinic from "./Clinic.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Doctor = db.define(
  "Doctor",
  {
    // Define attributes
    name: {
      type: DataTypes.STRING,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    education: {
      type: DataTypes.STRING,
    },
    course: {
      type: DataTypes.STRING,
    },
    experience: {
      type: DataTypes.STRING,
    },
    organization: {
      type: DataTypes.STRING,
    },
  },
  {

    freezeTableName: true
  }
);
Clinic.hasMany(Doctor);
Doctor.belongsTo(Clinic);

// Export model Product
export default Doctor;
