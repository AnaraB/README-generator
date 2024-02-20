const inquirer = require('inquirer');
const fs = require('fs');
const createData = require('./createData');


// Array of questions for user to generate README.md
const questions = [

  {
      type: "input",
      name: "github",
      message: "What's your Github username?"
  },
  {
      type: "input",
      name: "email",
      message: "What's your email?"
  },
  {
      type: "input",
      name: "title",
      message: "What's the name of your project?"
  },
  {
      type: "input",
      name: "description",
      message: "Describe your project by answering the following questions: What was your motivation? Why did you build this project? What problem does it solve?"
  },
  {
      type: "list",
      name: "license",
      message: "What license does your project have?",
      choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
  },
  {
      type: "input",
      name: "dependencies",
      message: "Any dependencies to install?",
      default: "npm i"
  },
  {
      type: "input",
      name: "usage",
      message: "Provide instructions and examples for use. Include screenshots as needed."
  },
  {
      type: "input",
      name: "credits",
      message: "List your collaborators, if any, with links to their GitHub profiles. If you used any third-party assets that require attribution, list them here too."
  }

];

inquirer.prompt(questions).then(answer =>{

    let data = createData(answer);
    fs.writeFileSync(`${answer.title}.md`, data)
});

