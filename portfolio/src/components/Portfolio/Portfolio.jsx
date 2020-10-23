import React from 'react';
import './styles/Portfolio.css';
import CV from './CV';
import { 
  frontEnd,
  backEnd,
  languages,
  principles,
  tools,
  education,
  workExperience
} from './experience';

class Portfolio extends React.Component {
  render () {
    return (
     <main className="portfolio__page">
      <h1 className="portfolio__wrapper--title">CV</h1>
      <section className="portfolio__wrapper">
        <article className="portfolio__education">
          <h2 className="portfolio__experience--category">Education</h2>
          {education.map(e => <CV key={e.key} date={e.date} description={e.description} />)}
        </article>
        <article className="portfolio__work">
          <h2 className="portfolio__experience--category">Jobs</h2>
          {workExperience.map(e => <CV key={e.key} date={e.date} description={e.description} />)}
        </article>
      </section>

      <h1 className="portfolio__experience--title">Knowledge</h1>
      <section className="portfolio__experience">
        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Front End</h2>
          {frontEnd.map(e => <h5 className="portfolio__experience--name">{e.title}</h5>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Back End</h2>
          {backEnd.map(e => <h5 className="portfolio__experience--name">{e.title}</h5>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Languages</h2>
          {languages.map(e => <h5 className="portfolio__experience--name">{e.title}</h5>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Tools</h2>
          {tools.map(e => <h5 className="portfolio__experience--name">{e.title}</h5>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Principles</h2>
          {principles.map(e => <h5 className="portfolio__experience--name">{e.title}</h5>)}
        </div>
        
      </section>
     </main>
    )
  }
}

export default Portfolio;