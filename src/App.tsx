import React, { useEffect, createContext, useState } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import i18n from './i18n';
import Footer from './components/Home/Footer';
import chooseLanguage from './utils/chooseLanguage';
import './styles/App.css';
import homeIcon from './assets/home.png';
import portfolioIcon from './assets/portfolio.png';
import projectIcon from './assets/layers.png';
import { setScrollbarStyles } from './utils/themes';

export const ThemeContext = createContext('light');

type Modes = 'dark' | 'light';

const App = () => {
  const [mode, _setMode] = useState<Modes>('light');

  useEffect(() => {
    i18n.changeLanguage(
      chooseLanguage(window.navigator.languages || [window.navigator.language])
    );

    setScrollbarStyles();
  }, []);

  return (
    <HashRouter basename="/">
      <ThemeContext.Provider value={mode}>
        <div className="app__wrapper">
          <nav className="navbar__routes">
            <ul>
              <li>
                <Link to="/">
                  <img src={homeIcon} alt="home" />
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  <img src={portfolioIcon} alt="portfolio" />
                </Link>
              </li>
              <li>
                <Link to="/project">
                  <img src={projectIcon} alt="project" />
                </Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <section className="footer__links">
            <Footer />
          </section>
        </div>
      </ThemeContext.Provider>
    </HashRouter>
  );
};

export default App;
