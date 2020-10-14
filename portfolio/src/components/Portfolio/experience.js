const { uuid } = require('uuidv4');

const frontEnd = [
  { key: uuid(), title: 'React', strength: 100 },
  { key: uuid(), title: 'HTML', strength: 100 },
  { key: uuid(), title: 'CSS', strength: 100 },
  { key: uuid(), title: 'React Native', strength: 100 },
  { key: uuid(), title: 'Redux', strength: 75 },
  { key: uuid(), title: 'jQuery', strength: 70 },
  { key: uuid(), title: 'Bootstrap', strength: 70 },
];

const backEnd = [
  { key: uuid(), title: 'Node.js', strength: 100 },
  { key: uuid(), title: 'Express', strength: 100 },
  { key: uuid(), title: 'MongoDB', strength: 75 },
  { key: uuid(), title: 'mongoose', strength: 75 },
  { key: uuid(), title: 'PostgreSQL', strength: 75 },
  { key: uuid(), title: 'REST API', strength: 75 },
  { key: uuid(), title: 'HTTP/JSON/AJAX', strength: 75 },
  { key: uuid(), title: 'CLI', strength: 75 },
  { key: uuid(), title: 'GraphQL', strength: 50 },
];

const languages = [
  { key: uuid(), title: 'JavaScript/ES6', strength: 100 },
  { key: uuid(), title: 'HTML5', strength: 100 },
  { key: uuid(), title: 'CSS3', strength: 100 },
  { key: uuid(), title: 'Python', strength: 35 },
  { key: uuid(), title: 'C', strength: 35 },
  { key: uuid(), title: 'Norwegian', strength: 100 },
  { key: uuid(), title: 'English', strength: 100 },
];

const principles = [
  { key: uuid(), title: 'Agile Development', strength: 100 },
  { key: uuid(), title: 'Mob Programming', strength: 100 },
  { key: uuid(), title: 'TDD', strength: 100 },
  { key: uuid(), title: 'Working in Teams', strength: 100 },
  { key: uuid(), title: 'SCRUM', strength: 100 },
];

const tools = [
  { key: uuid(), title: 'NPM', strength: 100 },
  { key: uuid(), title: 'GIT', strength: 100 },
  { key: uuid(), title: 'Mocha', strength: 100 },
  { key: uuid(), title: 'Linting', strength: 100 },
  { key: uuid(), title: 'Jest', strength: 70 },
  { key: uuid(), title: 'Chai', strength: 70 },
  { key: uuid(), title: 'Heroku', strength: 70 },
  { key: uuid(), title: 'Netlify', strength: 70 },
  { key: uuid(), title: 'Docker', strength: 70 },
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