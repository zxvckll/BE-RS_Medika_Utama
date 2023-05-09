
import Doctor from "./Doctor.js";
import Clinic from "./Clinic.js";
import Patient from "./Patient.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Tes = db.define(
  "Tes",
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
Doctor.hasMany(Tes);
Tes.belongsTo(Doctor);

Patient.hasMany(Tes);
Tes.belongsTo(Patient);

Clinic.hasMany(Tes);
Tes.belongsTo(Clinic);



// Export model Product
export default Tes;
