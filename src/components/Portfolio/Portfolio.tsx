import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/Portfolio.css';
import CV from './CV';
import CVEducation from './CVEducation';
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
    <div className="portfolio">
      <h1 className="portfolio__title">{t('portfolio:Experience')}</h1>
      <div className="portfolio__section">
        <div className="portfolio__article">
          <div className="portfolio__experience__card">
            <h2>{t('portfolio:Jobs')}</h2>
            {workExperience.map(({ key, date, translationKey, img }) => (
              <CV
                key={key}
                date={date}
                translationKey={translationKey}
                img={img}
              />
            ))}
          </div>
        </div>
        <div className="portfolio__article">
          <div className="portfolio__experience__card">
            <h2>{t('portfolio:Education')}</h2>
            {education.map(({ key, date, translationKey, img, subjects }) => (
              <CVEducation
                key={key}
                date={date}
                translationKey={translationKey}
                subjects={subjects}
                img={img}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="portfolio__section">
        <h2 className="portfolio__title">{t('portfolio:Acknowledgements')}</h2>
        <div className="portfolio__article">
          <div className="portfolio__experience__card">
            {acknowledgement.map(({ key, description, link, img, name }) => (
              <div key={key}>
                <p className="portfolio__article--paragraph">
                  {t(`portfolio:${description}`)}
                </p>
                {link && (
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
                )}
                <img
                  src={img}
                  className="portfolio__experience__card--image"
                  alt={name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="portfolio__section">
        <h2 className="portfolio__title">{t('portfolio:Knowledge')}</h2>
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
      </div>
    </div>
  );
};

export default Portfolio;
