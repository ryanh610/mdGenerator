// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
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
            type: 'checkbox',
            message: 'Please choose a license:',
            name: 'license',
            choices: ['MIT', 'ISC']
        },
        {
            type: 'input',
            message: 'Please input your github username:',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Please input your email:',
            name: 'email'
        }
    ]

inquirer 
.prompt(questions).then((answers) => {
    console.log('ANSWERS ARE ->', answers);
    const markdown = generateMarkdown(answers)
    fs.writeFile(`${answers.title}.md`, markdown, (err) => {
    if (err)
        console.log(err);
    else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync(`${answers.title}.md`, "utf8"));
  }
});s
}).catch((err) => {
    console.log(err);
})

