// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./potential-enigma/develop/utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your GitHub user name? '
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input', 
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input', 
        name: 'description',
        message: 'Please write a description of your project.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of License should your project have? (required)',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'none'],
        validate: choiceInput => {

            if(choiceInput.length < 1){
                console.log('You must return at least one license choice');
                return false; 
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'What command should be run to install dependencies'
    }, 
    {
        type: 'input',
        name: 'test',
        message: 'What command should be run to run tests?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about the repo'
    }, 
    {
        type: 'input',
        name: 'contribution',
        message: 'What does the user need to know about contributing to the repo?'
    }
    
];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), (err) => {
        if(err){
            console.log(err);
        }else{
            console.log('File written Successfully');
        }
    });
    
}

// TODO: Create a function to initialize app
function init() {
         inquirer.prompt(questions).then(answers => {
             userInput = answers;
             
             console.log(userInput);  
             
            writeToFile('./potential-enigma/README.md', answers);
         });
        
    
    
    }
    
// Function call to initialize app
init();


