//import models and require
const mysql = require('mysql2');
const consoleTable = require('console.table');

//create a connection using MYSQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Brazil5055',
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
 //add a department into the department table within the database employees_DB
 async addDepartment(input) {
  let sql = `INSERT INTO department (name) VALUES (?)`;
  let params = input;

  await db.promise().query(sql, params, (err, result) => {
    if(err) {
      console.log(err);
    }
  });
}
//add a role into the role table within the database employees_DB
async addRole(role, salary, department) {
  let sql = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;

  await db.promise().query(sql, [role, salary, department], (err, result) => {
    if (err) {
      console.log(err);
    }
  });
} 
 //add an employee into the employee table within the database employees_DB
 async addEmployee(first_name, last_name, role, manager) {
  let sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
  if(manager=='NULL') {
    sql = `INSERT INTO employee (first_name, last_name, role_id) VALUES (?, ?, ?)`
    await db.promise().query(sql, [first_name, last_name, role, manager], (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  } else {
    await db.promise().query(sql, [first_name, last_name, role, manager], (err, result) => {
      if (err) {
        console.log(err);
      }
    });
  }      
}
//update employee role into the employee table within the database employees_DB
async updateEmployee(employeeId, roleId) {
  let sql = `UPDATE employee SET role_id = ? WHERE id = ?`;
  await db.promise().query(sql, [roleId, employeeId], (err, result) => {
    if (err) {
      console.log(err);
     }
   });
  }
}


//Export Query
module.exports = Query;