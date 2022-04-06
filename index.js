// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your name?',
//             name: 'fullName'
//         },
//         {
//             type: 'list',
//             message: 'What languages are you learning?',
//             name: 'languages',
//             choices: ['JavaScript', 'Java', 'Python', 'C']
//         },
//         {
//             type: 'checkbox',
//             message: 'What is your preferred method of contact?',
//             name: 'contactMethod',
//             choices: ['email','text','mail','call']
//         }
//     ])
// ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// Class material

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter a file name:',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Please enter a description:',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Please enter installation instructions:',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Please enter usage information:',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Please enter contribution guidelines:',
            name: 'contribution'
        },
        {
            type: 'input',
            message: 'Please enter test instructions:',
            name: 'testing'
        },
        {
            type: 'choice',
            message: 'Please choose a license:',
            name: 'license',
            choices: ['MIT', 'GNU GPLv3']
        }
        
    ])

    .then ((response) => {
        console.log(response);

        const templateLiteral = `# ${response.title}
        
## Description
${response.description}

## Installation Instructions
${response.installation}

## Usage Information
${response.usage}

## Contribution Guidelines
${response.contribution}

## Test Instructions
${response.testing}

##License

`
    
        fs.writeFile(`${response.title}.md`, templateLiteral, (err) => err ? console.log(err) : console.log("Success"))
    });
