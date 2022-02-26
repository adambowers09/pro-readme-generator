// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  switch (license) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";}
};      

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === "No license") {
    return "";
  } else {
    return `* [License](#license)`;
  }
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>
  `
# ${data.projectName}

## Description
${data.projectDescription}
  
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Build](#build)
* [License](#license)
* [Tests](#tests)
* [Questions](#questions)
  
## Installation
${data.installation}

## Usage
${data.usage}

## Build
${data.build}
  
## Licenses
${data.license}
    
## Tests 
${data.test} 
## Questions
Contact me via [email](mailto:${data.email}).
View my GitHub [profile](https://github.com/${data.userName}).
`;

module.exports = generateMarkdown;
