// Packages required for project
const fs = require('fs')
const inquirer = require('inquirer');

const team = new team()

// menu that prompts user to add engineer and intern after adding manager

function addTeam(option) {
  if (option === 'addEngineer') {
    addEngineer();
  }
  if (option === 'addIntern') {
    addIntern();
  }
  if (option === 'finish')  {
    team.saveFile()
  }
}

inquirer.prompt([
    {
      type: 'input',
      message: "Manager's title?",
      name: 'managerName',
    },
    {
      type: 'input',
      message: "Manager's employee ID?",
      name: 'managerId',
    },
    {
      type: 'input',
      message: "Enter manager's email:",
      name: 'managerEmail',
    },
    {
      type: 'input',
      message: "Enter manager's phone number:",
      name: 'managerPhone',
    },
  ]).then((response) =>{
    const manager = new Manager(
      data.managerName,
      data.managerId,
      data.managerEmail,
      data.managerPhone
    );
  console.table(response);

  
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log()
}

// Function call to initialize app
init();
