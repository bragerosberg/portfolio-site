import React from 'react';
import { useTranslation } from 'react-i18next';
import Techstack from './Techstack';
import portrait from "../../assets/portrait.png";
import './styles/Home.css';
import Github from '../../assets/github.png';
import Linkedin from '../../assets/linkedin.png';


const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="homepage__wrapper">
        <img className="portrait" src={portrait} alt="portrait brage røsberg bragerøsberg bragerosberg" />
        <div className="homepage__info__wrapper">
          <h1 className="homepage__name">Brage Røsberg</h1>
          <Techstack />
          <p className="homepage__location">{t('home:CurrentPosition')}</p>
        </div>
      </section>
      <div className="homepage__hotlinks">
      
        <a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer">
          <img src={Github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} alt="linkedin" />
        </a>

      </div>
    </main>
  );
}

export default Home;
