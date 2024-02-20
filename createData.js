//generate data markdown for README
function createData(answer){
  return `

  # ${answer.title}
  ## GitHub URL 🌐
  [${answer.github}](https://github.com/${answer.github}/)

  ## Description
  ${answer.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation (Dependancies)
  To install dependencies, run these commands:

  \`\`\`
  ${answer.dependencies}
  \`\`\`
 
  ## Usage
  ${answer.usage}

  ## Credits
  ${answer.credits}

  ## License
  [MIT](https://chooselicense.com/licenses/${answer.license}/)

  `

}

module.exports = createData;
