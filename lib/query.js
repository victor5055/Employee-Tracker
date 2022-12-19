//import models and require
const mysql = require('mysql2');
const consoleTable = require('console.table');

//create a connection using MYSQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'admin',
      database: 'employees_DB'
    },
    console.log(`Connected to the employees_DB database.`)
  );

class Query {
    //method to display the department table within the employees_DB
    async viewDepartments() {
      let sql = `SELECT * FROM department`;
      try {
        let results = await db.promise().query(sql);
        return results[0];
      } catch(error) {
        console.error(error);
      }
    }
}
//Export Query
module.exports = Query;