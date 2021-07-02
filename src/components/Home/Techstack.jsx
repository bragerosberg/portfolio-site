import React from 'react';
import './styles/Techstack.css';
import mainTech from '../../assets/mainTech';

const Techstack = () => (
  <article className="tech__wrapper">
    {mainTech.map(({ logo, name }) => (
      <section key={name} className="tech__logos">
        <img src={logo} alt={name} className={name} />
      </section>
    ))}
  </article>
);

export default Techstack;
