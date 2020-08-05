import React from 'react';
import './styles/Portfolio.css';
import Progress from './Progress';
import { frontEnd, backEnd, languages, principles, tools } from './experience';

class Portfolio extends React.Component {
  render () {
    return (
     <main>
       <section className="portfolio__experience">

          <div className="portfolio__experience__card">
            <h2 className="portfolio__experience--category">Front End</h2>
            {frontEnd.map(e => <Progress key={e.key} title={e.title} width={e.strength} />)}
          </div>

          <div className="portfolio__experience__card">
            <h2 className="portfolio__experience--category">Back End</h2>
            {backEnd.map(e => <Progress key={e.key} title={e.title} width={e.strength} />)}
          </div>

          <div className="portfolio__experience__card">
            <h2 className="portfolio__experience--category">Languages</h2>
            {languages.map(e => <Progress key={e.key} title={e.title} width={e.strength} />)}
          </div>

          <div className="portfolio__experience__card">
            <h2 className="portfolio__experience--category">Tools</h2>
            {tools.map(e => <Progress key={e.key} title={e.title} width={e.strength} />)}
          </div>

          <div className="portfolio__experience__card">
            <h2 className="portfolio__experience--category">Principles</h2>
            {principles.map(e => <Progress key={e.key} title={e.title} width={e.strength} />)}
          </div>
          

       </section>
     </main>
    )
  }
}

export default Portfolio;