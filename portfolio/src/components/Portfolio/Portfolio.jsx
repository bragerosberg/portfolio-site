import React from 'react';
import './styles/Portfolio.css';
import CV from './CV';
import TechExperiences from './TechExperiences';
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
     <main>
      <section className="portfolio__wrapper">
      <h1 className="portfolio__wrapper--title">Education and previous jobs</h1>
        <article className="portfolio__education">
          <h2 className="portfolio__experience--category">Education</h2>
          {education.map(e => <CV key={e.key} date={e.date} description={e.description} />)}
        </article>
        <article className="portfolio__work">
          <h2 className="portfolio__experience--category">Previous Jobs</h2>
          {workExperience.map(e => <CV key={e.key} date={e.date} description={e.description} />)}
        </article>
      </section>

      <h1 className="portfolio__experience--title">Technologies, languages and experience</h1>
      <section className="portfolio__experience">
        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Front End</h2>
          {frontEnd.map(e => <TechExperiences key={e.key} title={e.title} width={e.strength} />)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Back End</h2>
          {backEnd.map(e => <TechExperiences key={e.key} title={e.title} width={e.strength} />)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Languages</h2>
          {languages.map(e => <TechExperiences key={e.key} title={e.title} width={e.strength} />)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Tools</h2>
          {tools.map(e => <TechExperiences key={e.key} title={e.title} width={e.strength} />)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Principles</h2>
          {principles.map(e => <TechExperiences key={e.key} title={e.title} width={e.strength} />)}
        </div>
        

      </section>
     </main>
    )
  }
}

export default Portfolio;