import React from 'react';
import Techstack from './Techstack';
import { useTranslation } from 'react-i18next';
import './styles/Home.css';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main>
      <div className="homepage__header">
        <h1 className="homepage__name">Brage Røsberg</h1>
        <p className="homepage__role">{t('home:CurrentPosition')}, Oslo</p>
      </div>
      <div className="homepage__content">
        <Techstack />
      </div>
    </main>
  );
};

export default Home;
