import { Sequelize } from "sequelize";
import process from "process"

const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

// Create connection
const db = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: "mysql"
});

// Export connection
export default db;
