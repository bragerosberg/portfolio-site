import React, { useContext } from 'react';
import './styles/Techstack.css';
import mainTech from '../../assets/mainTech';
import { ThemeContext } from '../../App';

const Techstack = () => {
  const theme = useContext(ThemeContext);
  return (
    <div>
      <ul className="tech__list">
        {mainTech.map(({ logo, name }) => (
          <li
            key={name}
            className="tech__item"
            style={{
              backgroundColor: theme === 'dark' ? 'rgb(35, 39, 47)' : '#f8f8f8',
            }}
          >
            <img src={logo} alt={name} className="tech__logo" />
            <span
              style={{
                color:
                  theme === 'dark' ? 'rgb(246, 247, 249)' : 'rgb(35, 39, 47)',
              }}
            >
              {name}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Techstack;
