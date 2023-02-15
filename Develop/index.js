// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'What is the name of your project?',
    },
    {
        type: 'input',
        name: 'projectDescription',
        message: 'Please provide a brief description of your project:',
    },
    {
        type: 'input',
        name: 'projectInstallation',
        message: 'Please provide installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'projectUsage',
        message: 'Please provide usage instructions for your project:',
    },
    {
        type: 'input',
        name: 'projectContribution',
        message: 'Please provide contribution guidelines for your project:',
    },
    {
        type: 'input',
        name: 'projectLicense',
        message: 'Please provide the license for your project:',
    },
    {
        type: 'input',
        name: 'projectTests',
        message: 'Please provide the tests for your project:'
    }, 
    {
        type: 'input',
        name: 'projectQuestions',
        message: 'Please provide your GitHib username:'
    },
    {
        type: 'input',
        name: 'projectEmail',
        message: 'Please provide your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('README file has been generated!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const licenseBadge = `[![${answers.projectLicense} license](https://img.shields.io/badge/License-${answers.projectLicense}-brightgreen.svg)](https://opensource.org/licenses/${answers.projectLicense})`;
        const readmeContent = `
# ${answers.projectName}

${licenseBadge}

## Description

${answers.projectDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [questions](#questions)
- [tests](#tests)
- [License](#license)
## Installation

${answers.projectInstallation}

## Usage

${answers.projectUsage}

## Contributing

${answers.projectContribution}

## Questions 
- My github profile is (https://github.com/${answers.projectQuestions})
- ${answers.projectEmail}

## License

This project is licensed under the ${answers.projectLicense} license. ${licenseBadge}

`;
        writeToFile('README.md', readmeContent);
    });
}


// Function call to initialize app
init();