import React from 'react';
import { Card } from 'react-bootstrap';
import { myProjects } from './projects';
import './styles/Project.css';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="portfolio__experience--title">
        {t('project:PersonalProjects')}
      </h1>

      <section className="project__wrapper">
        {myProjects.map(
          ({ image, alt, title, text, topics, repolink, website }, i) => (
            <Card key={i} style={{ width: '15rem' }} className="project__card">
              <Card.Img
                variant="top"
                className="project__image"
                src={image}
                alt={alt}
              />
              <Card.Title className="project__title">
                {t(`project:${title}`)}
              </Card.Title>
              <Card.Text className="project__text">
                {t(`project:${text}`)}
              </Card.Text>
              <Card.Footer className="project__topic">{topics}</Card.Footer>
              <div className="button__wrapper">
                <a href={repolink} target="_blank" rel="noopener noreferrer">
                  <button className="primaryButton">
                    {t(`project:Repository`)}
                  </button>
                </a>
                {website ? (
                  <a href={website} target="_blank" rel="noopener noreferrer">
                    <button className="primaryButton">
                      {t(`project:Website`)}
                    </button>
                  </a>
                ) : null}
              </div>
            </Card>
          )
        )}
      </section>
    </main>
  );
};

export default Project;
