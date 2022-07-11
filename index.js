// Packages required for project
const fs = require('fs');
const inquirer = require('inquirer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
// const Team = require('./lib/team');

// const team = new team()

// menu that prompts user to add engineer and intern after adding manager

function nextTeam(option) {
  if (option === 'addEngineer') {
    addEngineer();
  }
  if (option === 'addIntern') {
    addIntern();
  }
  if (option === 'finish')  {
    saveFile()
  }
}

// manager prompt questions
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
    { 
      // adds selection menu after manager's questions are answered
      name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    },
  ]).then((response) =>{
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.managerPhone
    );
  nextTeam(response.addMore);

  console.table(response);

});

// engineer prompt questions
function addEngineer() {
  inquirer.prompt([
    {
      type: 'input',
      message: "Engineer's title?",
      name: 'engineerName',
    },
    {
      type: 'input',
      message: "Engineer's employee ID?",
      name: 'engineerId',
    },
    {
      type: 'input',
      message: "Enter engineer's email:",
      name: 'engineerEmail',
    },
    {
      type: 'input',
      message: "Enter engineer's gitHub account:",
      name: 'engineerGithub',
    },
    { name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    }
  ])
  .then((response) => {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerId,
      response.engineerEmail,
      response.engineerGithub
    );
    nextTeam(response.addMore);  
  });
}

// intern prompt questions
function addIntern() {
  inquirer.prompt([
    {
      type: 'input',
      message: "Intern's title?",
      name: 'internName',
    },
    {
      type: 'input',
      message: "Intern's employee ID?",
      name: 'internId',
    },
    {
      type: 'input',
      message: "Enter intern's email:",
      name: 'internEmail',
    },
    {
      type: 'input',
      message: "Enter intern's school:",
      name: 'internSchool',
    },
    { name: 'addMore',
      type: 'list',
      choices: [
        {
          value: 'addEngineer',
          name: 'Add engineer',
        },
        {
          value: 'addIntern',
          name: 'Add intern',
        },
        {
          value: 'finish',
          name: 'Finish',
        },
      ],
    }
  ])
  .then((response) => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.internSchool
    );
    nextTeam(response.addMore);  
  });
}

// saveFile function
function saveFile() {

 
}



// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  console.log()
}

// Function call to initialize app
init();
