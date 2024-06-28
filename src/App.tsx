import React, { useEffect } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import i18n from './i18n';
import Footer from './components/Home/Footer';
import chooseLanguage from './utils/chooseLanguage';
import './styles/App.css';
import { setScrollbarStyles } from './utils/themes';
import Navbar from './components/Navbar';

const App = () => {
  useEffect(() => {
    i18n.changeLanguage(
      chooseLanguage(window.navigator.languages || [window.navigator.language])
    );

    setScrollbarStyles();
  }, []);

  return (
    <HashRouter basename="/">
      <div className="app__wrapper">
        <Navbar />
        <Switch>
          <Route path="/project">
            <Project />
          </Route>
          <Route path="/">
            <Home />
            <Portfolio />
          </Route>
        </Switch>
        <section className="footer__links">
          <Footer />
        </section>
      </div>
    </HashRouter>
  );
};

export default App;
