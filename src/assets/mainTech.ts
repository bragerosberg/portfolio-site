import js from './js.png';
import react from './react.png';
import nodejs from './nodejs.png';
import next from './nextjs.jpg';
import typescript from './typescript.png';

type Tech = {
  name: string;
  logo: string;
};

const mainTech: Tech[] = [
  { name: 'Typescript', logo: typescript },
  { name: 'JavaScript', logo: js },
  { name: 'React', logo: react },
  { name: 'Next', logo: next },
  { name: 'Node', logo: nodejs },
];

export default mainTech;
