// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"What would you like your description to be?",
"What are the steps to install?",
"What is the usage information?",
"What are the contributing guidelines?",
"What are the testing instructions?",
"What is your github username?",
"What is your email?",
"What license do you need?",];

// TODO: Create a function to write README file
function writeToFile(fileName, response) {
    const title = response.title
    const description = response.description
    const install = response.install
    const usage = response.usage
    const contribution = response.contribution
    const testing = response.testing
    const username = response.username
    const email = response.email
    const license = response.license
    const badges = {
    APM: "https://shields.io/badge/license-MIT-green", 
    AUR: "https://shields.io/badge/license-Apache-blue", 
    Bower: "https://shields.io/badge/license-MIT-green", 
    CocoaPods: "https://shields.io/badge/license-MIT-%23373737", 
    Conda: "https://shields.io/badge/license-MIT-green", 
    CPAN: "https://shields.io/badge/license-lgpl__2__1-blue", 
    CRAN: "https://shields.io/badge/license-MIT%20%2B%20file%20LICENSE-blue", 
    CratesIO: "https://shields.io/badge/license-MIT%2FApache--2.0-blue", 
    CTAN: "https://shields.io/badge/license-ppl1.3c%2C%20ofl-lightgrey", 
    DUB: "https://shields.io/badge/license-MIT-green", 
    Eclipse: "https://shields.io/badge/license-GPL-blue", 
    GitHub: "https://shields.io/badge/license-MIT-green", 
    Hex: "https://shields.io/badge/license-Apache%202-blue", 
    NPM: "https://shields.io/badge/license-MIT-green", 
    Ore: "https://shields.io/badge/license-MIT-green", 
    Packagist: "https://shields.io/badge/license-MIT-green", 
    PyPI: "https://shields.io/badge/license-BSD-green", 
    REUSE: "https://shields.io/badge/reuse-compliant-green", 
    Weblate: "https://shields.io/badge/license-MIT-informational"
    }
    const badgeUrl = badges[license]
    console.log(license)
    console.log(badges[license])
    
    const html = 
`## Description

![badgeImg](${badgeUrl})

${description} 


## Table of Contents 

[Installation](#Installation)
    
[Usage](#Usage)
    
[License](#License)
    
[Constributing](#Constributing)
    
[Tests](#Tests)
    
[Questions](#Questions)
    
    
## Installation
    
${install}
    
    
## Usage
    
${usage}
    
    
## License 
    
${license}
    
    
## Contribution 
    
${contribution}
    
    
## Tests
    
${testing}
    
    
## Questions
    
For questions, email me at: ${email}
    
Or, checkout my [github!](github.com/${username})`
    
    fs.writeFile(`./Output/${title}-README.md`, html, (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: "input",
            message: questions[0],
            name: "title",
        },
        {
            type: "input",
            message: questions[1],
            name: "description",
        },
        {
            type: "input",
            message: questions[2],
            name: "install",
        },
        {
            type: "input",
            message: questions[3],
            name: "usage",
        },
        {
            type: "input",
            message: questions[4],
            name: "contribution",
        },
        {
            type: "input",
            message: questions[5],
            name: "testing",
        },
        {
            type: "input",
            message: questions[6],
            name: "username",
        },
        {
            type: "input",
            message: questions[7],
            name: "email",
        },
        {
            type: "list",
            message: questions[8],
            choices: ["APM", "AUR", "Bower", "CocoaPods", "Conda", "CPAN", "CRAN", "CratesIO", "CTAN", "DUB", "Eclipse", "GitHub", "Hex", "NPM", "Ore", "Packagist", "PyPI", "REUSE", "Weblate"],
            name: "license",
        },
      ])
      .then((response) => {
        writeToFile("sample.md", response)
      })
}

// Function call to initialize app
init();
