import salt from '../../assets/salt.png';
import spar from '../../assets/spar.jpg';
import dagens from '../../assets/dagens.png';
import eurospar from '../../assets/eurospar.jpg';
import uio from '../../assets/uio.png';
import uit from '../../assets/uit.png';
import mf from '../../assets/mf.png';

const { uuid } = require('uuidv4');

type UUID = {
  key: string;
};

type Knowledge = {
  title: string;
  icon: string;
} & Pick<UUID, 'key'>;

export type Experience = {
  date: string;
  translationKey: string;
  img?: string;
} & Pick<UUID, 'key'>;

export const frontEnd: Knowledge[] = [
  { key: uuid(), title: 'React', icon: 'logos:react' },
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
  { key: uuid(), title: 'mongoose', icon: 'la:medium-m' },
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
    date: 'Aug 2020 -> Dec 2020',
    translationKey: 'PracticalSpanishUiO',
    img: uio,
  },
  {
    key: uuid(),
    date: 'Apr 2020 -> Jul 2020',
    translationKey: 'SALTBootcamp',
    img: salt,
  },
  {
    key: uuid(),
    date: 'Aug 2019 -> Jun 2020',
    translationKey: 'SocialScience',
    img: mf,
  },
  {
    key: uuid(),
    date: 'Aug 2018 -> Jun 2019',
    translationKey: 'ComputerScience',
    img: uit,
  },
];

export const workExperience: Experience[] = [
  { key: uuid(), date: 'CurrentJob', translationKey: 'DagensJob', img: dagens },
  { key: uuid(), date: 'Apr 2020 -> Dec 2020', translationKey: 'FSSALT', img: salt },
  {
    key: uuid(),
    date: 'Dec 2019 -> Apr 2020',
    translationKey: 'SPAREnsjo',
    img: spar,
  },
  {
    key: uuid(),
    date: 'May 2019 -> Jul 2019',
    translationKey: 'EUROSPARKvaloysletta',
    img: eurospar,
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
