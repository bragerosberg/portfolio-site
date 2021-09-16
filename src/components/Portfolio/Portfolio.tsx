import React from 'react';
import { useTranslation } from 'react-i18next';
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


const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <main className="portfolio__page">

      <h1 className="portfolio__experience--title">{t('portfolio:Knowledge')}</h1>
      <section className="portfolio__experience">

        <PortfolioCard portfolioList={frontEnd} name={'Frontend'} />

        <PortfolioCard portfolioList={backEnd} name={'Backend'} />

        <PortfolioCard portfolioList={languages} name={t('portfolio:Languages')} />

        <PortfolioCard portfolioList={tools} name={t('portfolio:Tools')} />

        <PortfolioCard portfolioList={principles} name={t('portfolio:Principles')} />

      </section>

      <h1 className="portfolio__wrapper--title">{t('portfolio:Experience')}</h1>
      <section className="portfolio__wrapper">

        <article className="portfolio__education">
          <h2 className="portfolio__experience--category">{t('portfolio:Jobs')}</h2>
          {workExperience.map(({ key, date, translationKey }) =>
            <CV key={key} date={date} translationKey={translationKey} />
          )}
        </article>

        <article className="portfolio__education">
          <h2 className="portfolio__experience--category">{t('portfolio:Education')}</h2>
          {education.map(({ key, date, translationKey }) =>
            <CV key={key} date={date} translationKey={translationKey} />
          )}
        </article>


      </section>

      <h1 className="portfolio__wrapper--title">{t('portfolio:Acknowledgements')}</h1>
      <section className="portfolio__wrapper">

        <article className="portfolio__education">
          {acknowledgement.map(({ key, description, link, img, name }) => <div key={key}>
            <p>{t(`portfolio:${description}`)}</p>
            {(link ?
              <a
                className="btn btn-primary link__button"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read Article
              </a>
              : null
            )}
            <img src={img} alt={name} />
          </div>)}
        </article>

      </section>

    </main>
  );
}

export default Portfolio;
