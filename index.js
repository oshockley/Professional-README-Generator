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
    }
])
.then((answers) => {

    const template = `
# ${answers.title}

## Table of Contents
- [Description](#description)
- Installation
- Questions

## Description
${answers.description}

## Installation
These are the installation instructions

## Questions
Oshockley
sampleemail@mail.com
    `;

    console.log(template);

    fs.writeFile("./README.md", template, () => {
        console.log("README has been generated!")
    })

  })