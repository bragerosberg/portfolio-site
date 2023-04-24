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
    <section className="portfolio">
      <header className="portfolio__header">
        <h1 className="portfolio__title">{t('portfolio:Experience')}</h1>
      </header>
      <section className="portfolio__section">
        <article className="portfolio__article">
          <div className="portfolio__experience__card">
            <header className="portfolio__article-header">
              <h2 className="portfolio__article-title">
                {t('portfolio:Jobs')}
              </h2>
            </header>
            {workExperience.map(({ key, date, translationKey, img }) => (
              <CV
                key={key}
                date={date}
                translationKey={translationKey}
                img={img}
              />
            ))}
          </div>
        </article>
        <article className="portfolio__article">
          <div className="portfolio__experience__card">
            <header className="portfolio__article-header">
              <h2 className="portfolio__article-title">
                {t('portfolio:Education')}
              </h2>
            </header>
            {education.map(({ key, date, translationKey, img }) => (
              <CV
                key={key}
                date={date}
                translationKey={translationKey}
                img={img}
              />
            ))}
          </div>
        </article>
      </section>
      <section className="portfolio__section">
        <header className="portfolio__header">
          <h2 className="portfolio__title">{t('portfolio:Knowledge')}</h2>
        </header>
        <div className="portfolio__cards">
          <PortfolioCard portfolioList={frontEnd} name="Frontend" />
          <PortfolioCard portfolioList={backEnd} name="Backend" />
          <PortfolioCard
            portfolioList={languages}
            name={t('portfolio:Languages')}
          />
          <PortfolioCard portfolioList={tools} name={t('portfolio:Tools')} />
          <PortfolioCard
            portfolioList={principles}
            name={t('portfolio:Principles')}
          />
        </div>
      </section>
      <section className="portfolio__section">
        <header className="portfolio__header">
          <h2 className="portfolio__title">
            {t('portfolio:Acknowledgements')}
          </h2>
        </header>
        <article className="portfolio__article">
          <div className="portfolio__experience__card">
            {acknowledgement.map(({ key, description, link, img, name }) => (
              <div key={key}>
                <p className="portfolio__article--paragraph">{t(`portfolio:${description}`)}</p>
                {link ? (
                  <a
                    className="portfolio__link"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="portfolio__button">
                      {t('portfolio:ReadArticle')}
                    </button>
                  </a>
                ) : null}
                <img src={img} className="portfolio__experience__card--image" alt={name} />
              </div>
            ))}
          </div>
        </article>
      </section>
    </section>
  );
};

export default Portfolio;
