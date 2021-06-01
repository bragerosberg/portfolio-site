import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import i18n from './i18n';
import Footer from './components/Home/Footer';
import chooseLanguage from './utils/chooseLanguage';
import './styles/App.css';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(
        chooseLanguage(
          window.navigator.languages || [window.navigator.language]
        )
      );
  }, []);

  return (
    <HashRouter basename="/">
        <div className="app__wrapper">
          <nav className="navbar__routes">
            <ul>
              <li><Link to="/">{t('home:Home')}</Link></li>
              <li><Link to="/portfolio">{t('home:Portfolio')}</Link></li>
              <li><Link to="/project">{t('home:Projects')}</Link></li>
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
      </HashRouter>
  )
}

export default App;
