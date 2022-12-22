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
//view all roles within the database employees_DB
async viewRoles() {
  let sql = `SELECT roles.id AS id, roles.title AS title, roles.salary AS salary, department.name AS department 
  FROM roles 
  JOIN department ON roles.department_id = department.id;`;
  try {
    let results = await db.promise().query(sql);
    return results[0];
  } catch(error) {
    console.error(error);
  }
}
//view all employees department & roles within the database employees_DB
async viewEmployees() {
  let sql = `SELECT e.id AS id, e.first_name AS first_name, e.last_name AS last_name, roles.title AS title, department.name AS department, roles.salary AS salary, CONCAT(m.first_name, " ", m.last_name) AS manager 
  FROM employee e 
  JOIN roles ON e.role_id = roles.id 
  JOIN department ON roles.department_id = department.id 
  LEFT JOIN employee m ON m.id = e.manager_id;`
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