//import models
const inquirer = require('inquirer');
const Query = require('./query');
const db = new Query();


//Start the app
class app {
run(){
  this.option();
}
  //Brings up the menu option
  async options() {
    const { option } = await inquirer.prompt([
      {
        type: "list",
        message: "Welcome to the Main Menu.",
        name: "option",
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

 

      await this.response(option);
      
      if (option != 8) {
        setTimeout(() => {
          this.options();
        }, 1000);
      } else {
        this.quit();
      }
    }
 }
//reponse base on the user's input
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
        message: "What department are you looking for?",
        name: "department",
      },
    ]);
    db.addDepartment(department);
  } else if (selection===5) {
    let departments = await db.viewDepartments();

//Adding value as a property to be used
departments = departments.map(department => {
  department.value = department.id;
  return department;
});

const { role, salary, department } = await inquirer.prompt([
  {
    type: "input",
    message: "What is the name of the role you're looking for?",
    name: "role",
  },
  {
    type: "input",
    message: "What is the salary of the role you're looking for?",
    name: "salary",
  },
  {
    type: "list",
    message: "Which department does the role belong to?",
    name: "department",
    choices: departments
  },
]);
  } else if (selection===6) {

  } else if (selection===7) {

  } else if (selection===8) {

  } else if (selection===9) {
    return;
  }
}
  quit() {
    console.log('\nBye!');
    process.exit(0);


};
//Export app
module.exports = app;