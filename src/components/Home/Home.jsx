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
        <h1 className="homepage__title">Full Stack Developer</h1>
        <p className="homepage__location">Jr. Developer at Dagens</p>
      </div>
    </section>
    <Techstack />
    </main>

export default Home;