import inquirer from "inquirer";
import fs from "fs";


inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?",
    },
    {
        type: "input",
        name: "installation",
        message: "Do you know the installation instructions?",
    },
    {
        type: "input",
        name: "usage",
        message: "What are the usage instructions?",
    },
    {
        type: "input",
        name: "license",
        message: "Do you know what license the project uses?"
    },
    {
        type: "input",
        name: "contributes",
        message:"What contributes to this project?",
    },
    {
        type: "input",
        name: "testing",
        message: "What are the instructions on behalf of testing the project?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "walkthrough",
        message: "Have you watched the walkthrough video?",
    }

])
.then((answers) => {

    const template = `
# ${answers.title}

# Pro README Generator

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Walkthrough](#walkthrough)
- [Questions](#questions)

## Description
${answers.description}

## Installation
These are the installation instructions
${answers.installation}

## Usage
These are the installation instructions
${answers.usage}

## License
This is licensed with MIT License.
${answers.license}

## Walkthrough
This is licensed with MIT License.
${answers.walkthrough}



## Questions
Contact:
Github: [${answers.github}](https://github.com/${answers.github})
Email: [${answers.email}](mailto:${answers.email})
    `;

    console.log(template);

    fs.writeFile("./README.md", template, () => {
        console.log("README has been generated!")
    })

  })