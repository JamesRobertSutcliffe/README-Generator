// function to generate markdown for README
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license] (https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return '';
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

### Description

${data.description}

### Contents

*[Installation](#installation)

*[Usage](#usage)

*[Testing](#testing)

*[Contribution](#contribution)

### Installation

${data.installation}

### Usage

${data.usage}

### Contribution

${data.contribution}

### Testing

${data.testing}

Please contact me at ${data.email} with any questions.

Check out on github by searching ${data.github}.

`;
}

module.exports = generateMarkdown;
