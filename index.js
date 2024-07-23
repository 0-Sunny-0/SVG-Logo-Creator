// TODO: Include packages needed for this application. 

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// maxLength will be needed for validation function on character limit. 

const questions = [
    // Question 1 
    {
        type: "input",
        message: "Please enter up to 3 characters for your logo.",
        name: "3char"

        // function validation() {}
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
            "Square"
        ]
    },
    // Question 4
    {
        type: "list",
        message: "Please enter in the color of your logo shape.",
        name: "color2"
    }
];

// TODO: Create a function to write SVG to file

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Generated logo.svg!')
    })
};

// TODO: Create a function to initialize app

// Change out 'shape goes here' to actual SVG file that will be saved. 
function init () {
    inquirer
        .prompt(questions)
        .then((data) => {
            if(data.shape === "Triangle"){
                writeToFile('logo.svg', 'shape SVG goes here')
            } else if(data.shape === "Circle"){
                writeToFile('logo.svg', 'shape SVG goes here')
            } else {
                writeToFile('logo.svg', 'shape SVG goes here')
            }
        })
};

// Function call to initialize app

init();