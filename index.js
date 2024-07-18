// TODO: Include packages needed for this application. 

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input

const questions = [
    // Question 1 
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo.",
        name: "3char"
    },
    // Question 2
    {
        type: "input",
        message: "Please enter in a color choice for your logo text.",
        name: "color"
    },
    // Question 3
    {
        type: "list",
        message: "Please select a shape style for your logo.",
        name: "shape",
        choices: [
            "Triangle",
            "Circle",
            "Square",
        ]
    },
    // Question 4
    {
        type: "list",
        message: "Please enter in the color of your logo shape.",
        name: "color"
    }
];

// TODO: Create a function to write SVG to file

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data (err) => {
        err ? console.error(err) : console.log('Generated logo.svg!')
    })
}

// TODO: Create a function to initialize app

function init () {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile('logo.svg', (data))
        })
}

// Function call to initialize app

init();