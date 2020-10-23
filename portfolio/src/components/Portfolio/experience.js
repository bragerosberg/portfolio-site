const { uuid } = require('uuidv4');

const frontEnd = [
  { key: uuid(), title: 'React', icon: "logos:react"},
  { key: uuid(), title: 'HTML', icon: "logos:html-5" },
  { key: uuid(), title: 'CSS', icon: "logos:css-3"},
  { key: uuid(), title: 'React Native', icon: "logos:react"},
  { key: uuid(), title: 'Redux', icon: "logos:redux"},
  { key: uuid(), title: 'jQuery', icon: "cib:jquery"},
  { key: uuid(), title: 'Bootstrap', icon: "logos:bootstrap"},
];

const backEnd = [
  { key: uuid(), title: 'Node.js', icon: "logos:nodejs"},
  { key: uuid(), title: 'Express', icon: "logos:express"},
  { key: uuid(), title: 'MongoDB', icon: "logos:mongodb"},
  { key: uuid(), title: 'mongoose', icon: "la:medium-m"},
  { key: uuid(), title: 'PostgreSQL', icon: "logos:postgresql"},
  { key: uuid(), title: 'REST API', icon: "dashicons:rest-api"},
  { key: uuid(), title: 'HTTP/JSON/AJAX', icon: "carbon:json"},
  { key: uuid(), title: 'CLI', icon: "grommet-icons:cli"},
  { key: uuid(), title: 'Firebase', icon: "logos:firebase"},
  { key: uuid(), title: 'GraphQL', icon: "logos:graphql"},
];

const languages = [
  { key: uuid(), title: 'JavaScript/ES6', icon: "logos:javascript"},
  { key: uuid(), title: 'HTML5', icon: "logos:graphql"},
  { key: uuid(), title: 'CSS3', icon: "logos:css-3"},
  { key: uuid(), title: 'Python', icon: "logos:python"},
  { key: uuid(), title: 'C', icon: "teenyicons:c-outline"},
  { key: uuid(), title: 'Norwegian', icon: "emojione:flag-for-norway"},
  { key: uuid(), title: 'English', icon: "emojione:flag-for-united-kingdom"},
];

const principles = [
  { key: uuid(), title: 'Agile Development', icon: "carbon:chart-line-smooth"},
  { key: uuid(), title: 'Mob Programming', icon: "cil:group"},
  { key: uuid(), title: 'TDD', icon: "noto:test-tube"},
  { key: uuid(), title: 'Working in Teams', icon: "ri:team-fill"},
  { key: uuid(), title: 'SCRUM', icon: "twemoji:green-circle"},
];

const tools = [
  { key: uuid(), title: 'NPM', icon: "logos:npm"},
  { key: uuid(), title: 'GIT', icon: "fa-brands:git"},
  { key: uuid(), title: 'Mocha', icon: "logos:mocha"},
  { key: uuid(), title: 'Linting', icon: "logos:eslint"},
  { key: uuid(), title: 'Jest', icon: "logos:jest"},
  { key: uuid(), title: 'Chai', icon: "logos:chai"},
  { key: uuid(), title: 'Heroku', icon: "logos:heroku-icon"},
  { key: uuid(), title: 'Netlify', icon: "logos:netlify"},
  { key: uuid(), title: 'Docker', icon: "logos:docker-icon"},
  { key: uuid(), title: 'Figma', icon: "logos:figma"},
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