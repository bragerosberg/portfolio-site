import React from 'react';
import './styles/Techstack.css';
import mainTech from '../../assets/mainTech';

const Techstack = () => (
  <section className="tech">
    <ul className="tech__list">
      {mainTech.map(({ logo, name }) => (
        <li key={name} className="tech__item">
          <img src={logo} alt={name} className="tech__logo" />
          <span className="tech__name">{name}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Techstack;
