//import models and require
const mysql = require('mysql2');
const cTable = require('console.table');

//create a connection using MYSQL
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'admin',
      database: 'employees_DB'
    },
    console.log(`Connected to the employees_DB database.`)
  );
