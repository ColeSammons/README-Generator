// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "What is your Github username?",
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Enter your Github name please!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your Github repo name?",
        name: 'reponame',
        validate: repoInput => {
            if (repoInput) {
                return true;
            } else {
                console.log('Enter your Github repo name please!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "What is your project's title?",
        name: 'titlename',
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Enter your Github repo name please!');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'projectDesc',
        validate: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log('Please enter at least a brief description.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmDeploy',
        message: 'Is your project deployed?',
        default: false
    },
    {
        type: 'input',
        name: 'deployLink',
        message: 'Enter the full link to your deployed project.',
        when: ({ confirmDeploy }) => confirmDeploy
    }
    {
        type: 'confirm',
        name: 'confirmTable',
        message: 'Would you like to have a table of contents?',
        default: true
    },
    {
        type: 'checkbox',
        name: 'tableContent',
        message: 'Choose which categories you would like to display in the table of contents.',
        choices: ['Installation', 'Usage', 'Credits', 'License', 'Badges', 'Features', 'Tests'],
        when: ({ confirmTable }) => confirmTable
    },
    {
        type: 'input',
        message: "Provide steps to install your project.",
        name: 'installSteps',
        validate: installInput => {
            if (installInput) {
                return true;
            } else {
                console.log('You must provide at least a brief description of the installation process.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Describe how your project is used.",
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('You must provide at least a brief description of how the project is used.');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmScreen',
        message: 'Would you like to have a screenshot?',
        default: false
    },
    {
        type: 'checkbox',
        name: 'tableContent',
        message: 'First, place the screenshot into assets/images.Now enter the full file name.',
        when: ({ confirmScreen }) => confirmScreen
    },
    {
        type: 'input',
        message: "Enter any credits you would like to list for the project.",
        name: 'credits'
    },
    {
        type: 'list',
        name: 'tableContent',
        message: 'Choose which license you would like to use.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data);
        })
}


// Function call to initialize app
init();
