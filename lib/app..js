//Dependencies
const inquirer = require('inquirer');
const Query = require('./query');
const db = new Query();

// Starts the Application
class Application {
    run() {
      this.init();
    }

    //Appear the options in menu
  async init() {
    const { init } = await inquirer.prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "init",
        choices: [
          {
            name: "View all departments",
            value: 1,
          },
          {
            name: "View all roles",
            value: 2,
          },
          {
            name: "View all employees",
            value: 3,
          },
          {
            name: "Add a department",
            value: 4,
          },
          {
            name: "Add a role",
            value: 5,
          },
          {
            name: "Add an employee",
            value: 6,
          },
          {
            name: "Update an employee role",
            value: 7,
          },
          {
            name: "Quit",
            value: 8,
          }
        ]
      },  
    ]);

    await this.response(init);

    if (init != 8) {
      setTimeout(() => {
        this.init();
      }, 1000);
    } else {
      this.quit();
    }
}
//Responses based on the user's input
async response(selection) {
  let result = null;

  if(selection===1){
    result = await db.viewDepartments();
    console.table(result);
  } else if (selection===2) {
    result = await db.viewRoles();
    console.table(result);
  } else if (selection===3) {
    result = await db.viewEmployees();
    console.table(result);
  } else if (selection===4) {
    let { department } = await inquirer.prompt([
      {
        type: "input",
        message: "Which department would you like to search for?",
        name: "department",
      },
    ]);
    db.addDepartment(department);
} else if (selection===5) {
  let departments = await db.viewDepartments();
  
  //Map Array method
  departments = departments.map(department => {
    department.value = department.id;
    return department;
  });
  
  const { role, salary, department } = await inquirer.prompt([
    {
      type: "input",
      message: "Which role would you like to search?",
      name: "role",
    },
    {
      type: "input",
      message: "What is the salary of the role?",
      name: "salary",
    },
    {
      type: "list",
      message: "Which department does the role belong to?",
      name: "department",
      choices: departments
    },
  ]);
  db.addRole(role, salary, department);
} else if (selection===6) {
  let roles = await db.viewRoles();
  let managers = await db.viewEmployees();