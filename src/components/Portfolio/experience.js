const { uuid } = require('uuidv4');

const frontEnd = [
  { key: uuid(), title: 'React', icon: "logos:react"},
  { key: uuid(), title: 'Redux', icon: "logos:redux"},
  { key: uuid(), title: 'HTML', icon: "logos:html-5" },
  { key: uuid(), title: 'CSS', icon: "logos:css-3"},
  { key: uuid(), title: 'React Native', icon: "logos:react"},
  { key: uuid(), title: 'jQuery', icon: "cib:jquery"},
  { key: uuid(), title: 'Bootstrap', icon: "logos:bootstrap"},
];

const backEnd = [
  { key: uuid(), title: 'Node.js', icon: "logos:nodejs"},
  { key: uuid(), title: 'Sanity', icon: "ri:team-fill"},
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
  { key: uuid(), date: 'Aug/20 - Dec/20', description: 'PracticalSpanishUiO'},
  { key: uuid(), date: 'Apr/20 - Jul/20', description: 'SALTBootcamp'},
  { key: uuid(), date: 'Aug/19 - Jun/20', description: 'SocialScience'},
  { key: uuid(), date: 'Aug/18 - Jun/19', description: 'ComputerScience'},
];

const workExperience = [
  { key: uuid(), date: 'CurrentJob', description: 'DagensJob'},
  { key: uuid(), date: 'Apr/20 - Dec/20', description: 'FSSALT'},
  { key: uuid(), date: 'Dec/19 - Apr/20', description: 'SPAREnsjo'},
  { key: uuid(), date: 'May/19 - Jul/19', description: 'EUROSPARKvaloysletta'},
];

const acknowledgement = [
  { 
    key: uuid(),
    name: 'Finansavisen',
    description: 'FinansavisenDescription',
    link: 'https://finansavisen.no/nyheter/arbeidsliv/2020/05/05/7524332/hoppet-av-it-studiene-til-fordel-for-bootcamp-i-koding',
    img: 'https://i.imgur.com/MIaDgqQ.png'
  },
]

module.exports = {
  frontEnd, backEnd, languages, principles, tools, education, workExperience, acknowledgement
}
