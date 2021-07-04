// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  switch (license) {
    case 'GNU AGPLv3':
      badge = "[![License: GNU AGPLv3](https://img.shields.io/badge/license-GNU%20AGPLv3-green)](https://www.gnu.org/licenses/agpl-3.0.en.html)";
      break;

    case 'GNU GPLv3':
      badge = "[![License: GNU GPLv3](https://img.shields.io/badge/license-GNU%20GPLv3-green)](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;

    case 'GNU LGPLv3':
      badge = "[![License: GNU LGPLv3](https://img.shields.io/badge/license-GNU%20LGPLv3-green)](https://www.gnu.org/licenses/lgpl-3.0.en.html)";
      break;

    case 'Mozilla Public License 2.0':
      badge = "[![License: Mozilla Public License 2.0](https://img.shields.io/badge/license-MPL%202.0-green)](https://www.mozilla.org/en-US/MPL/2.0/)";
      break;

    case 'Apache License 2.0':
      badge = "[![License: Apache License 2.0](https://img.shields.io/badge/license-Apache%202.0-green)](https://www.apache.org/licenses/LICENSE-2.0)";
      break;

    case 'MIT License':
      badge = "[![License: MIT License](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)";
      break;

    case 'Boost Software License 1.0':
      badge = "[![License: Boost Software License 1.0](https://img.shields.io/badge/license-BSL%201.0-green)](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case 'The Unlicense':
      badge = "[![License: The Unlicense](https://img.shields.io/badge/license-The%20Unlicense-green)](https://unlicense.org/)";
      break;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = '';
  switch (license) {
    case 'GNU AGPLv3':
      link = "[GNU AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html)";
      break;

    case 'GNU GPLv3':
      link = "[GNU GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html)";
      break;

    case 'GNU LGPLv3':
      link = "[GNU LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html)";
      break;

    case 'Mozilla Public License 2.0':
      link = "[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)";
      break;

    case 'Apache License 2.0':
      link = "[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0)";
      break;

    case 'MIT License':
      link = "[MIT License](https://opensource.org/licenses/MIT)";
      break;

    case 'Boost Software License 1.0':
      link = "[Boost Software License 1.0](https://www.boost.org/LICENSE_1_0.txt)";
      break;

    case 'The Unlicense':
      link = "[The Unlicense](https://unlicense.org/)";
      break;
  }
  return link
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const year = new Date();
  return `
  ## License
  ${renderLicenseLink(license)}

  Copyright &copy; ${year.getFullYear()}
  `;
}

function confirmScreenshot(data) {
  if (data.confirmScreen === false) {
    return '';
  }
  return `
  ![Screenshot](../images/${data.screenshot})
  `;
}

function confirmDeploy(data) {
  if (data.confirmDeploy === false) {
    return '';
  }
  return `
  [${data.deployLink}](${data.deployLink})
  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.titlename}

  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.projectDesc}

  ${confirmDeploy(data)}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
   
  ## Installation
  
  ${data.installSteps}
  
  ## Usage

  ${data.usage}
  ${confirmScreenshot(data)}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributer}

  ## Tests

  ${data.test}

  ## Questions

  ${data.contact}

  ${data.email}

  [https://github.com/${data.username}/${data.reponame}](https://github.com/${data.username}/${data.reponame})
`;
}

module.exports = generateMarkdown;
