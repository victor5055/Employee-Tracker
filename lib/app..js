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