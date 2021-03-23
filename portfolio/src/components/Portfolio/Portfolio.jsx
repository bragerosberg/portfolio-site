import React from 'react';
import './styles/Portfolio.css';
import CV from './CV';
import PortfolioCard from './PortfolioCard';
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

const Portfolio = () => (
  <main className="portfolio__page">

    <h1 className="portfolio__experience--title">Knowledge</h1>
    <section className="portfolio__experience">

      <PortfolioCard portfolioList={frontEnd} name={'Frontend'} />

      <PortfolioCard portfolioList={backEnd} name={'Backend'} />

      <PortfolioCard portfolioList={languages} name={'Languages'} />

      <PortfolioCard portfolioList={tools} name={'Tools'} />

      <PortfolioCard portfolioList={principles} name={'Principles'} />
      
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

export default Portfolio;