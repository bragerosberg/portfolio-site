import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Portfolio from './components/Portfolio/Portfolio';
import Project from './components/Project/Project';
import Footer from './components/Home/Footer';
import Contact from './components/contact/Contact';
import Discussion from './components/discussion/Discussion';
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
              <li><Link to ="/contact">Contact Me</Link></li>
              <li><Link to ="/discussion">Discussion</Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/project">
              <Project />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/discussion">
              <Discussion />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <section className="footer__links">
            <Footer />
          </section>
        </div>
      </BrowserRouter>
  )
}

export default App;
