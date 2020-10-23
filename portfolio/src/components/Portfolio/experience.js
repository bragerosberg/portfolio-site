const { uuid } = require('uuidv4');

const frontEnd = [
  { key: uuid(), title: 'React'},
  { key: uuid(), title: 'HTML'},
  { key: uuid(), title: 'CSS'},
  { key: uuid(), title: 'React Native'},
  { key: uuid(), title: 'Redux'},
  { key: uuid(), title: 'jQuery'},
  { key: uuid(), title: 'Bootstrap'},
];

const backEnd = [
  { key: uuid(), title: 'Node.js'},
  { key: uuid(), title: 'Express'},
  { key: uuid(), title: 'MongoDB'},
  { key: uuid(), title: 'mongoose'},
  { key: uuid(), title: 'PostgreSQL'},
  { key: uuid(), title: 'REST API'},
  { key: uuid(), title: 'HTTP/JSON/AJAX'},
  { key: uuid(), title: 'CLI'},
  { key: uuid(), title: 'Firebase'},
  { key: uuid(), title: 'GraphQL'},
];

const languages = [
  { key: uuid(), title: 'JavaScript/ES6'},
  { key: uuid(), title: 'HTML5'},
  { key: uuid(), title: 'CSS3'},
  { key: uuid(), title: 'Python'},
  { key: uuid(), title: 'C'},
  { key: uuid(), title: 'Norwegian'},
  { key: uuid(), title: 'English'},
];

const principles = [
  { key: uuid(), title: 'Agile Development'},
  { key: uuid(), title: 'Mob Programming'},
  { key: uuid(), title: 'TDD'},
  { key: uuid(), title: 'Working in Teams'},
  { key: uuid(), title: 'SCRUM'},
];

const tools = [
  { key: uuid(), title: 'NPM'},
  { key: uuid(), title: 'GIT'},
  { key: uuid(), title: 'Mocha'},
  { key: uuid(), title: 'Linting'},
  { key: uuid(), title: 'Jest'},
  { key: uuid(), title: 'Chai'},
  { key: uuid(), title: 'Heroku'},
  { key: uuid(), title: 'Netlify'},
  { key: uuid(), title: 'Docker'},
  { key: uuid(), title: 'Figma'},
];

const education = [
  { key: uuid(), date: 'June 2018', description: 'Graduated High School'},
  { key: uuid(), date: 'August 2018 - June 2019', description: 'Computer Science Study at The University of Tromsø'},
  { key: uuid(), date: 'August 2019 - June 2020', description: 'Social Science Study at The Norwegian School of Teology (MF)'},
  { key: uuid(), date: 'April 2020 - July 2020', description: 'School of Applied Technology bootcamp on FullStack JavaScript Development'},
  
]
const workExperience = [
  { key: uuid(), date: 'May 2019 - July 2019', description: 'Store Assistant at Eurospar Kvaløysletta'},
  { key: uuid(), date: 'December 2019 - April 2020', description: 'Store Assistant at Spar Ensjø'},

];

module.exports = {
  frontEnd, backEnd, languages, principles, tools, education, workExperience
}