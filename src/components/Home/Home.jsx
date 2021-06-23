import React from 'react';
import Techstack from './Techstack';
import './styles/Home.css';
import CurrentWork from './CurrentWork';

const Home = () => (
  <main>
    <section className="homepage__wrapper">
      <div className="homepage__info__wrapper">
        <div className="homepage__name__wrapper">
          <h1 className="homepage__name">Brage</h1>
          <h1 className="homepage__surname">Rosberg</h1>
        </div>
        <Techstack />
        <CurrentWork />
      </div>
    </section>
  </main>
);

export default Home;
