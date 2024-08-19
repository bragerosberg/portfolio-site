import React from 'react';
import { myProjects } from './projects';
import './styles/Project.css';
import { useTranslation } from 'react-i18next';

const Project = () => {
  const { t } = useTranslation();

  return (
    <div className="projects">
      {myProjects.map(({ i18nTitle, i18nText, topics, repolink }, i) => (
        <div key={i} className="project">
          <h2>{t(`project:${i18nTitle}`)}</h2>
          <p>{t(`project:${i18nText}`)}</p>
          <p>Teknologier: {topics}</p>
          <p>
            Source:{' '}
            <a href={repolink} className="link">
              Github
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Project;
