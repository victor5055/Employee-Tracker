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

    //For a Promise resolved
    .then((answers) => {
      console.log(answers.option);

      this.response(answers.option);

    })
    //An error for rejected Promise
    .catch((error) => console.error(error));
}

response(selection) {
  if(selection===1){
    db.viewDepartments();
    this.options();
  } else if (selection===2) {

  } else if (selection===3) {

  } else if (selection===4) {

  } else if (selection===5) {

  } else if (selection===6) {

  } else if (selection===7) {

  } else if (selection===8) {

  } else if (selection===9) {
    return;
  }
}
}
//Export app
module.exports = app;