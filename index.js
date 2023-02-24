const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license?',
        choices: ["MIT", "APACHE_2.0", "The Unlicense", "Boost Software License 1.0", "None"]
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Outline any important usage notes',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the installation process?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Explain the contribution process',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'explain the testing process',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// function to initialize program
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(`generating README...`);
        writeToFile('READ_ME.md', generateMarkdown({ ...response }))
    })

}

// function call to initialize program
init();
