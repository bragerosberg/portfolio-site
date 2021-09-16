import redux from './redux.png';
import js from './js.png';
import react from './react.png';
import nodejs from './nodejs.png';
import typescript from './typescript.png';

type Tech = {
  name: string;
  logo: string;
}

const mainTech: Tech[] = [
  { name: 'Typescript', logo: typescript },
  { name: 'JavaScript', logo: js },
  { name: 'React', logo: react },
  { name: 'Redux', logo: redux },
  { name: 'Node', logo: nodejs }
];

export default mainTech;
