
import Doctor from "./Doctor.js";
import Day from "./Day.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const Schedule = db.define(
  "Schedule",
  {
    // Define attributes
    time: {
      type: DataTypes.TIME,
    },
  },
  {

    freezeTableName: true
  }
);
Doctor.hasMany(Schedule);
Schedule.belongsTo(Doctor);

Day.hasMany(Schedule);
Schedule.belongsTo(Day);


// Export model Product
export default Schedule;
