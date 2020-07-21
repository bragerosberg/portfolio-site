import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Project from './components/Project';
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
        <div>
          <nav className="navbar__routes">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/project">Projects</Link></li>
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
            <ul>
              <li><a href="https://www.github.com/bragerosberg">Github</a></li>
              <li><a href="https://www.linkedin.com/in/brage-rosberg">LinkedIn</a></li>
            </ul>
          </section>
        </div>
      </BrowserRouter>
  )
}

export default App;
