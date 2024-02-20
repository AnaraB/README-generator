//generate data markdown for README
function createData(answer){
  return `

  # ${answer.title}
  ## GitHub URL 🌐
  [${data.github}](https://github.com/${data.github}/)

  ## Description
  ${answer.description}



  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)



  `

}
