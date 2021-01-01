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
  workExperience,
  acknowledgement,
} from './experience';

class Portfolio extends React.Component {
  render () {
    return (
     <main className="portfolio__page">

      <h1 className="portfolio__experience--title">Knowledge</h1>
      <section className="portfolio__experience">
        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Front End</h2>
          {frontEnd.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
            <h4 className="portfolio__experience--name">{e.title}</h4>
            <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
          </div>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Back End</h2>
          {backEnd.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
          <h4 className="portfolio__experience--name">{e.title}</h4>
          <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
          </div>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Languages</h2>
          {languages.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
          <h4 className="portfolio__experience--name">{e.title}</h4>
          <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
          </div>)}
        </div>

        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Tools</h2>
          {tools.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
          <h4 className="portfolio__experience--name">{e.title}</h4>
          <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
          </div>)}
        </div>


        <div className="portfolio__experience__card">
          <h2 className="portfolio__experience--category">Principles</h2>
          {principles.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
          <h4 className="portfolio__experience--name">{e.title}</h4>
          <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
          </div>)}
        </div>
        
      </section>
      <h1 className="portfolio__wrapper--title">Experience</h1>
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
      <h1 className="portfolio__wrapper--title">Acknowledgements</h1>
      <section className="portfolio__wrapper">
        <article className="portfolio__education">
          <h2 className="portfolio__experience--category">Brage Røsberg</h2>
          {acknowledgement.map(e =>
          <div key={e.key}>
            <p>{e.description}</p>
            {(e.link ? <a className="btn btn-light link__button" href={e.link} target="_blank" rel="noopener noreferrer">Read More</a> : null)} 
            <img src={e.img} alt={e.name} />
          </div>)
          }
        </article>
      </section>

     </main>
    )
  }
}

export default Portfolio;