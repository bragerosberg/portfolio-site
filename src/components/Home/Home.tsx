import React from 'react';
import Techstack from './Techstack';
import { useTranslation } from 'react-i18next';
import './styles/Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <section className="homepage__wrapper">
        <div className="homepage__info__wrapper">
          <div className="homepage__name__wrapper">
            <h1 className="homepage__name">Brage Røsberg</h1>
          </div>
          <p className="homepage__role">{t('home:CurrentPosition')}</p>
          <Techstack />
        </div>
      </section>
    </main>
  );
};

export default Home;
