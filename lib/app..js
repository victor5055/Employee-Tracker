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
        message: "Welcome to the Main Menu?",
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








