const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./generateMarkdown.js");
const path = require("path");
const OUTPUT_DIR = path.resolve(__dirname, "readme-output");
const outputPath = path.join(OUTPUT_DIR, "readme.md");

const inputs = [
    {
        type: 'input',
        message: 'Please enter your project title:',
        name: 'projectTitle',
    },
    {
        type: 'input',
        message: 'Please enter a description of your project:',
        name: 'projectDescription',
    },
    {
        type: 'input',
        message: 'Please enter any installation instructions:',
        name: 'installInstructions',
    },
    {
        type: 'input',
        message: 'Please enter usage information:',
        name: 'projectUsage',
    },
    {
        type: 'list',
        message: 'Choose your licensing badge(s):',
        name: 'projectLicense',
        choices: ["Apache", "GPL", "MIT"]
    },
    {
        type: 'input',
        message: 'Please enter your contribution guidelines:',
        name: 'projectGuidelines',
    },
    {
        type: 'input',
        message: 'Please enter any tests performed:',
        name: 'projectTests',
    },
    {
        type: 'input',
        message: 'Please enter your GitHub username:',
        name: 'questionsGitHub',
    },
    {
        type: 'input',
        message: 'Please enter your email address:',
        name: 'questionsEmail',
    }
];


function writeToFile(fileName, questions) {
    console.log(fileName);
    fs.writeFile(fileName, questions, err =>
        err ? console.error(err) : console.log('File Created!')
    )
}


function init() {
    inquirer.prompt(inputs)
        .then((response) => {
            const markdown = generateMarkdown(response)
            writeToFile(outputPath, markdown), err =>
                err ? console.error(err) : console.log('File Created!')
        });
}
// Function call to initialize app
init();