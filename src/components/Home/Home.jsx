import React from 'react';
import { useTranslation } from 'react-i18next';
import Techstack from './Techstack';
import './styles/Home.css';

const Home = () => {
  const { t } = useTranslation();
  return (
    <main>
      <section className="homepage__wrapper">
        <div className="homepage__info__wrapper">
          <h1 className="homepage__name">Brage Rosberg</h1>
        </div>
      </section>
      {/* <Techstack /> */}
    </main>
  );
}

export default Home;
