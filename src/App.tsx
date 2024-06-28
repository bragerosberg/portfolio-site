import React, { useEffect } from 'react';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import i18n from './i18n';
import Footer from './components/Home/Footer';
import chooseLanguage from './utils/chooseLanguage';
import './styles/App.css';
import { setScrollbarStyles } from './utils/themes';

const App = () => {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(
      chooseLanguage(window.navigator.languages || [window.navigator.language])
    );

    setScrollbarStyles();
  }, []);

  return (
    <HashRouter basename="/">
      <div className="app__wrapper">
        <nav className="navbar__routes">
          <ul>
            <li>
              <Link to="/">{t('home:Portfolio')}</Link>
            </li>
            <li>
              <Link to="/project">{t('home:Projects')}</Link>
            </li>
          </ul>
        </nav>
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
