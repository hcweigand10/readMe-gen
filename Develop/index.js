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
function writeToFile(fileName, data) {}

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
            type: "input",
            message: questions[8],
            choices: [],
            name: "license",
        },
      ])
      .then((response) => {
        const name = response.name
        const city = response.city
        const food = response.food
        const username = response.username
        const travel = response.travel
      })
}

// Function call to initialize app
init();
