// Packages required for project
const fs = require('fs')
const inquirer = require('inquirer');
const { resolve } = require('path');

// Inquire prompts employee that ask if you need to add another employee

inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

inquirer.prompt({
  type: "loop",
  name: "items",
  message: "Create new employee card?",
  questions: [
    {
      type: 'input',
      message: 'Employee title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'Enter employee email:',
      name: 'email',
    },
    {
      type: 'input',
      message: 'Enter link to their GitHub or portfolio website:',
      name: 'portfolio',
    },
  ],
}).then((response) =>{
  console.table(response)
  fs.writeFile("index.html", ``)
});


  //Function intitializing app
  function init() {
    console.log()
  }
  
  // Function call to initialize app
  init();
  