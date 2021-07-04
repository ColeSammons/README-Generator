// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");
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
        message: "What is your email address?",
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Enter your email please!');
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
        type: 'input',
        name: 'screenshot',
        message: 'First, place the screenshot into /images. Now enter the full file name and type.',
        when: ({ confirmScreen }) => confirmScreen
    },
    {
        type: 'input',
        message: "Enter any credits you would like to list for the project.",
        name: 'credits'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose which license you would like to use.',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        message: "Enter how you would like people to contribute, if at all.",
        name: 'contributer',
        validate: contInput => {
            if (contInput) {
                return true;
            } else {
                console.log('Enter at least one contributer.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Provide a test or example how to run the program.",
        name: 'test',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('If there are no tests simply state there are none.');
                return false;
            }
        }
    },
    {
        type: 'input',
        message: "Finally, how would you like people to contact you?",
        name: 'contact',
        validate: contactInput => {
            if (contactInput) {
                return true;
            } else {
                console.log('If contact is not wanted please say so.');
                return false;
            }
        }
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(`./dist/${fileName}`, data, err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            console.log(data);
            return generateMarkdown(data);
        })
        .then(readme => writeToFile('README.md', readme))
        .catch(err => {
            console.log(err);
          });
}


// Function call to initialize app
init();
