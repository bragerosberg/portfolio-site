import salt from '../../assets/salt.png';
import dagens from '../../assets/dagens.png';
import uio from '../../assets/uio.png';
import uit from '../../assets/uit.png';
import mf from '../../assets/mf.png';
import schibsted from '../../assets/schibsted.png';

const { uuid } = require('uuidv4');

type UUID = {
  key: string;
};

type Knowledge = {
  title: string;
  icon: string;
} & Pick<UUID, 'key'>;

export type Experience = {
  date?: string;
  translationKey: string;
  img?: string;
  subjects?: string[];
} & Pick<UUID, 'key'>;

export const frontEnd: Knowledge[] = [
  { key: uuid(), title: 'React', icon: 'logos:react' },
  { key: uuid(), title: 'Next', icon: 'logos:nextjs' },
  { key: uuid(), title: 'Typescript', icon: 'logos:typescript-icon' },
  { key: uuid(), title: 'Redux', icon: 'logos:redux' },
  { key: uuid(), title: 'HTML', icon: 'logos:html-5' },
  { key: uuid(), title: 'CSS', icon: 'logos:css-3' },
  { key: uuid(), title: 'React Native', icon: 'logos:react' },
  { key: uuid(), title: 'jQuery', icon: 'cib:jquery' },
  { key: uuid(), title: 'Bootstrap', icon: 'logos:bootstrap' },
];

export const backEnd: Knowledge[] = [
  { key: uuid(), title: 'Node.js', icon: 'logos:nodejs' },
  { key: uuid(), title: 'Typescript', icon: 'logos:typescript-icon' },
  { key: uuid(), title: 'Sanity', icon: 'ri:team-fill' },
  { key: uuid(), title: 'Express', icon: 'logos:express' },
  { key: uuid(), title: 'MongoDB', icon: 'logos:mongodb' },
  { key: uuid(), title: 'PostgresSQL', icon: 'logos:postgresql' },
  { key: uuid(), title: 'Mongoose', icon: 'la:medium-m' },
  { key: uuid(), title: 'REST API', icon: 'dashicons:rest-api' },
  { key: uuid(), title: 'HTTP/JSON/AJAX', icon: 'carbon:json' },
  { key: uuid(), title: 'CLI', icon: 'grommet-icons:cli' },
  { key: uuid(), title: 'Firebase', icon: 'logos:firebase' },
  { key: uuid(), title: 'GraphQL', icon: 'logos:graphql' },
];

export const languages: Knowledge[] = [
  { key: uuid(), title: 'JavaScript/ES6', icon: 'logos:javascript' },
  { key: uuid(), title: 'Typescript', icon: 'logos:typescript-icon' },
  { key: uuid(), title: 'Python', icon: 'logos:python' },
  { key: uuid(), title: 'C', icon: 'teenyicons:c-outline' },
  { key: uuid(), title: 'Norwegian', icon: 'emojione:flag-for-norway' },
  { key: uuid(), title: 'English', icon: 'emojione:flag-for-united-kingdom' },
  { key: uuid(), title: 'Spanish', icon: 'emojione:flag-for-spain' },
];

export const principles: Knowledge[] = [
  { key: uuid(), title: 'Agile Development', icon: 'carbon:chart-line-smooth' },
  { key: uuid(), title: 'Mob Programming', icon: 'cil:group' },
  { key: uuid(), title: 'TDD', icon: 'noto:test-tube' },
  { key: uuid(), title: 'Working in Teams', icon: 'ri:team-fill' },
  { key: uuid(), title: 'SCRUM', icon: 'twemoji:green-circle' },
];

export const tools: Knowledge[] = [
  { key: uuid(), title: 'NPM', icon: 'logos:npm' },
  { key: uuid(), title: 'GIT', icon: 'fa-brands:git' },
  { key: uuid(), title: 'Mocha', icon: 'logos:mocha' },
  { key: uuid(), title: 'Linting', icon: 'logos:eslint' },
  { key: uuid(), title: 'Jest', icon: 'logos:jest' },
  { key: uuid(), title: 'Chai', icon: 'logos:chai' },
  { key: uuid(), title: 'Heroku', icon: 'logos:heroku-icon' },
  { key: uuid(), title: 'Netlify', icon: 'logos:netlify' },
  { key: uuid(), title: 'Docker', icon: 'logos:docker-icon' },
  { key: uuid(), title: 'Figma', icon: 'logos:figma' },
];

export const education: Experience[] = [
  {
    key: uuid(),
    translationKey: 'SALTBootcamp',
    img: salt,
    subjects: [
      'JavaScript, incl. Node, React, HTML, CSS',
      'Mongo DB, Mongoose',
      'Git',
      'TDD & BDD',
      'Agile',
      'Mob-programming',
    ],
  },
  {
    key: uuid(),
    translationKey: 'UiT',
    subjects: [
      'INF-1100: Innføring i programmering og datamaskiners virkemåte',
      'INF-1400: Objektorientert programmering',
      'MAT-1005:Diskret matematikk',
      'STA-0001: Brukerkurs i statistikk 1',
    ],
    img: uit,
  },
  {
    key: uuid(),
    translationKey: 'UiO',
    subjects: [
      'SPA1100: Praktisk spansk',
      'JUR1511: Individuell arbeidsrett',
    ],
    img: uio,
  },
  {
    key: uuid(),
    translationKey: 'MF',
    subjects: [
      'SAM1000: Innføring i samfunnsfag',
      'SAM1040: Demokrati, ulikhet og velferdsstat',
      'SAM1050: Internasjonal politikk',
      'SAM1060: Det flerkulturelle Norge',
      'SAM1070: Religion og samfunn: Norge i dag',
    ],
    img: mf,
  },
];

export const workExperience: Experience[] = [
  {
    key: uuid(),
    date: 'CurrentJob',
    translationKey: 'Schibsted',
    img: schibsted,
  },
  {
    key: uuid(),
    date: '01.2021 → 02.2022',
    translationKey: 'DagensJob',
    img: dagens,
  },
  {
    key: uuid(),
    date: '04.2020 → 12.2020',
    translationKey: 'FSSALT',
    img: salt,
  },
];

type Acknowledgement = {
  name: string;
  description: string;
  link: string;
  img: string;
} & Pick<UUID, 'key'>;

export const acknowledgement: Acknowledgement[] = [
  {
    key: uuid(),
    name: 'Finansavisen',
    description: 'FinansavisenDescription',
    link: 'https://finansavisen.no/nyheter/arbeidsliv/2020/05/05/7524332/hoppet-av-it-studiene-til-fordel-for-bootcamp-i-koding',
    img: 'https://i.imgur.com/MIaDgqQ.png',
  },
];
