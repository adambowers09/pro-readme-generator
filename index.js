// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "Enter your project name:",
        name: "projectName",
    },
    {
        type: "input",
        message: "Enter a project description in a few short sentences:",
        name: "projectDescription",
    },
    {
        type: "input",
        message: "Enter installation instructions:",
        name: "installation",
    },
    {
        type: "input",
        message: "Enter usage information:",
        name: "usage",
    },
    {
        type: "checkbox",
        choices: ['Javascript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node',],
        message: "What did you build this project with?",
        name: "build",
    },
    {
        type: "input",
        message: "Enter test information",
        name: "test",
    },
    {
        type: "list",
        choices: [
            "MIT License",
            "No license",
        ],
        message: "Select a license from the list:",
        name: "license",
    },
    {
        type: "input",
        message: "Enter your GitHub username:",
        name: "userName",
    },
    {
        type: "input",
        message: "Enter your email address",
        name: "email",
    },
    {
        type: "input",
        message: "Enter the year the application was created:",
        name: "year",
    }
];

// Prompt from the user calls the
const promptUser = () => {
    inquirer.prompt([...questions]).then((response) => {
      writeToFile("TRIAL_README.md",generateMarkdown(response));
    });
  };

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Sucess')
    });
};

// TODO: Create a function to initialize app
const init = () => {
    promptUser();
};

// Function call to initialize app
init();
