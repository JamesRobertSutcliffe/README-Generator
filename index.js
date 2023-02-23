const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
    },
    {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
    },
]);

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {

}

// function call to initialize program
init();
// questions();

