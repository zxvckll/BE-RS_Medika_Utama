import Doctor from "./Doctor.js";
import Patient from "./Patient.js";
import Admin from "./Admin.js";
// import sequelize
import { Sequelize } from "sequelize";
// import connection
import db from "../config/database.js";
// init DataTypes
const { DataTypes } = Sequelize;

// Define schema
const User = db.define(
  "User",
  {
    // Define attributes
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
  },
  {
    freezeTableName: true
  }
);

User.hasOne(Doctor);
Doctor.belongsTo(User);

User.hasOne(Patient);
Patient.belongsTo(User);

User.hasOne(Admin);
Admin.belongsTo(User);
// Export model Product
export default User;
