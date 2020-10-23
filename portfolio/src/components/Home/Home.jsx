import React from 'react';
import './styles/Home.css';

import portrait from "../../assets/portrait.png";
import About from './About'
import Techstack from './Techstack';


class Home extends React.Component {
  render () {
    return (
     <main>
      <section className="homepage__wrapper">
        <img className="portrait" src={portrait}  alt="portrait"/>
        <div className="homepage__info__wrapper">
          <h1 className="homepage__name">Brage Røsberg</h1>
          <h1 className="homepage__title">Full Stack JavaScript Developer</h1>
          <p className="homepage__location">Oslo, Norway</p>
        </div>
      </section>
      <About />
      <Techstack />
      <section className="contact__hotkey">
        <a href="mailto:bragecontact@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1000/1000885.svg" alt="mail"/></a>
        <a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" /></a>
        <a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedin" /></a>
      </section>
     </main>
    )
  }
}

export default Home;