import { Sequelize } from "sequelize";
 
// create connection
const db = new Sequelize('pa', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});
 
// export connection
export default db;