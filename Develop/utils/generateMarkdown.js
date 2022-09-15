// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
  return ' ';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/license/${license})
    `;
  } else {
    return ' ';
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
    The following license covers this application:
    ${renderLicenseLink(license)}
    `;
  }
};

// this function returns license in table of contents if license is present
function LicenseInTOC(license) {
  if (license !== 'no license') {
    return `
    * [License](#license)
    `;
  } else {
    return ' ';
  }
};

//function for message when not accepting contributions
function renderContributers(confirmContributers, data) {
  if (!confirmContributers) {
    return `
    Not currently accepting contributions on this project
    `;
  } else {
    return `
    ${data}
    `;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
${LicenseInTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributers(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

    [Email: ${data.email}](mailto:${data.email})

  [GitHub](https://github.com/${data.githubUsername})
`;
}

module.exports = generateMarkdown;
