import React from 'react';
import Techstack from './Techstack';
import portrait from "../../assets/portrait.png";
import './styles/Home.css';


const Home = () =>
    <main>
    <section className="homepage__wrapper">
      <img className="portrait" src={portrait}  alt="portrait brage røsberg bragerøsberg bragerosberg"/>
      <div className="homepage__info__wrapper">
        <h1 className="homepage__name">Brage Røsberg</h1>
        <h1 className="homepage__title">Jr. FS Developer</h1>
        <p className="homepage__location">Dagens</p>
      </div>
    </section>
    <Techstack />
    <section className="contact__hotkey">
      <a href="mailto:bragecontact@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/1000/1000885.svg" alt="mail"/></a>
      <a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/733/733553.svg" alt="github" /></a>
      <a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer"><img src="https://image.flaticon.com/icons/svg/174/174857.svg" alt="linkedin" /></a>
    </section>
    </main>

export default Home;