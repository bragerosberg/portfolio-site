import React from 'react';
import './styles/Techstack.css';
import mainTech from '../../assets/mainTech';

const Techstack = () => {
  return (
    <div>
      <ul className="tech__list">
        {mainTech.map(({ logo, name }) => (
          <li key={name} className="tech__item">
            <img src={logo} alt={name} className="tech__logo" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Techstack;
