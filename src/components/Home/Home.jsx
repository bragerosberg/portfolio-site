import React from 'react';
import Techstack from './Techstack';
import './styles/Home.css';

const Home = () => {
  return (
    <main>
      <section className="homepage__wrapper">
        <div className="homepage__info__wrapper">
          <h1 className="homepage__name">Brage</h1>
          <h1 className="homepage__surname">Rosberg</h1>
          <Techstack />
        </div>
      </section>
    </main>
  );
}

export default Home;
