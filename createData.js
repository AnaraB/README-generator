//generate data markdown for README
function createData(answer){
  return `

  # ${answer.title}
  ${renderBadge(answer.license)}
  
  ## Description
  ${answer.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation (Dependancies)
  To install dependencies, run these commands:

  \`\`\`
  ${answer.dependencies}
  \`\`\`
 
  ## Usage
  ${answer.usage}

  ## Contributors
  ${answer.contributors}

  ## License
  [MIT](https://chooselicense.com/licenses/${answer.license}/)
  

  ## Tests 
  To run tests, run these commands:

  \`\`\`
  ${answer.test}
  \`\`\`

  ## Questions
  *** GitHub profile *** <br />
  [${answer.github}](https://github.com/${answer.github}/) <br />
  Contact me at ${answer.email} if you have any questions.

  `;

}


// Function to display badge 
function renderBadge(license) {
  if (license != "None") {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`
  }
  return ''
}

module.exports = createData;
