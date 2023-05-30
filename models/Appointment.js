import Doctor from "./Doctor.js";
import Clinic from "./Clinic.js";
import Patient from "./Patient.js";
import Status from "./Status.js";
import Schedule from "./Schedule.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";

// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Appointment = db.define(
  "Appointment",
  {
    // Define attributes
    date: {
      type: DataTypes.DATEONLY,
    },
    waitingEstimation: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);
Schedule.hasMany(Appointment);
Appointment.belongsTo(Schedule);

Doctor.hasMany(Appointment);
Appointment.belongsTo(Doctor);

Patient.hasMany(Appointment);
Appointment.belongsTo(Patient);

Clinic.hasMany(Appointment);
Appointment.belongsTo(Clinic);

Status.hasMany(Appointment);
Appointment.belongsTo(Status);

// Export model Product
export default Appointment;
