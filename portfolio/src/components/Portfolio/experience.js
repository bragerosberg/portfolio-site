const { uuid } = require('uuidv4');

const frontEnd = [
  { key: uuid(), title: 'React', strength: 100 },
  { key: uuid(), title: 'HTML', strength: 100 },
  { key: uuid(), title: 'CSS', strength: 100 },
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

module.exports = {
  frontEnd, backEnd, languages, principles, tools
}