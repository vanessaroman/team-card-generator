// Packages required for project
const fs = require('fs');
const inquirer = require('inquirer');
// const Intern = require('./lib/intern');
const Manager = require('./lib/manager');
// const Engineer = require('./lib/engineer');
var employeeArr = []

// manager prompt questions
function start() {
  console.table(employeeArr)
inquirer.prompt([
  {
    type: 'list',
    message: "Add A team member?",
    name: 'newMember',
    choices: [ "Add manager", "Add engineer", "Add intern", "Finish"]
  }
]).then(response =>{
  console.log(response.newMember)

  if (response.newMember === "Add manager"){
    return addManager()
  }else if (response.newMember === "Add engineer"){
    return addEngineer()
  }else if (response.newMember === "Add intern") {
    return addIntern()
  } else {
    return finish()
  }

})};

function addManager() {
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
      response.managerId,
      response.managerName,
      response.managerEmail,
      response.managerPhone
    );
  // push answers to manager input into employee array
    employeeArr.push(manager);
      
      return start();

})};

// // engineer prompt questions
// function addEngineer() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: "Engineer's title?",
//       name: 'engineerName',
//     },
//     {
//       type: 'input',
//       message: "Engineer's employee ID?",
//       name: 'engineerId',
//     },
//     {
//       type: 'input',
//       message: "Enter engineer's email:",
//       name: 'engineerEmail',
//     },
//     {
//       type: 'input',
//       message: "Enter engineer's gitHub account:",
//       name: 'engineerGithub',
//     },
//     { name: 'addMore',
//       type: 'list',
//       choices: [
//         {
//           value: 'addEngineer',
//           name: 'Add engineer',
//         },
//         {
//           value: 'addIntern',
//           name: 'Add intern',
//         },
//         {
//           value: 'finish',
//           name: 'Finish',
//         },
//       ],
//     }
//   ])
//   .then((response) => {
//     const engineer = new Engineer(
//       response.engineerId,
//       response.engineerName,
//       response.engineerEmail,
//       response.engineerGithub
//     );
//     nextTeam(response.addMore);  
//   });
// }

// // intern prompt questions
// function addIntern() {
//   inquirer.prompt([
//     {
//       type: 'input',
//       message: "Intern's title?",
//       name: 'internName',
//     },
//     {
//       type: 'input',
//       message: "Intern's employee ID?",
//       name: 'internId',
//     },
//     {
//       type: 'input',
//       message: "Enter intern's email:",
//       name: 'internEmail',
//     },
//     {
//       type: 'input',
//       message: "Enter intern's school:",
//       name: 'internSchool',
//     },
//     { name: 'addMore',
//       type: 'list',
//       choices: [
//         {
//           value: 'addEngineer',
//           name: 'Add engineer',
//         },
//         {
//           value: 'addIntern',
//           name: 'Add intern',
//         },
//         {
//           value: 'finish',
//           name: 'Finish',
//         },
//       ],
//     }
//   ])
//   .then((response) => {
//     const intern = new Intern(
//       response.internName,
//       response.internId,
//       response.internEmail,
//       response.internSchool
//     );
//     nextTeam(response.addMore);  
//   });
// }
start()


function finish() {
  
  var cardsHtml = []

  for (let i = 0 ; i < (employeeArr.length); i++) {
    // console.log(i)
    console.log(employeeArr[i].renderBaseHTML())
    employeeArr.push(employeeArr[i].renderBaseHTML())
  }
  fs.writeFile("test.html", template, err => {
    if (err) throw err
  } );
  
  // // console.log(cardsHtml)
  
  var template = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Info Cards</title>
  </head>
  <body>
  
  <div id="cards-box">
  ${cardsHtml}
  </div>
  
  </body>
  </html>
  `


}

