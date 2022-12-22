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

async response(selection) {
  if(selection===1){
    db.viewDepartments();
   
  } else if (selection===2) {
    db.viewRoles();
 
  } else if (selection===3) {
    db.viewEmployees()
 
  } else if (selection===4) {
    const { department } = await inquirer.prompt([
      {
        type: "input",
        message: "What department are you looking for?",
        name: "department",
      },
    ]);
    db.addDepartment(department);
  } else if (selection===5) {

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


}
}
//Export app
module.exports = app;