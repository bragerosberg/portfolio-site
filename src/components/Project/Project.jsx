import React from 'react';
import { Card } from "react-bootstrap";
import { myProjects } from './projects';
import { useTranslation } from 'react-i18next';
import './styles/Project.css';

const Project = () => {
  const { t } = useTranslation();

  return (
    <main>
      <h1 className="project__title">{t('project:PersonalProjects')}</h1>

      <section className="project__wrapper">
        {myProjects.map(project => (
          <Card key={project.index} style={{ width: "18rem" }} className="project__card">
            <Card.Img variant="top" className="project__image" src={project.image} alt={project.alt}/>
            <Card.Title className="project__title">{project.title}</Card.Title>
            <Card.Text className="project__text">{project.text}</Card.Text>
            <Card.Footer className="project__topic">Topics: {project.topics}</Card.Footer>
            <div className="button__wrapper">
              <a className="btn btn-light link__button" href={project.repolink} target="_blank" rel="noopener noreferrer">Repository</a>
              {(project.website ? <a className="btn btn-light link__button" href={project.website} target="_blank" rel="noopener noreferrer">Website</a> : null)} 
            </div>
          </Card>
        ))}
      </section>
      
    </main>
  )
}

export default Project;
