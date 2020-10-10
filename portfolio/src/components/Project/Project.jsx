import React from 'react';
import { Card } from "react-bootstrap";
import { myProjects } from './projects';
import './styles/Project.css';

class Project extends React.Component {
  render () {
    return (
      <main>
        <section className="project__info">
          <p>List last updated 10th of October</p>
        </section>
        <section className="project__wrapper">
          {myProjects.map(project => (
            <Card key={project.index} style={{ width: "18rem" }} className="project__card">
              <Card.Img variant="top" className="project__image" src={project.image} />
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <div className="button__wrapper">
                <a className="link__button" href={project.repolink} target="_blank" rel="noopener noreferrer">Repository</a>
                <a className="link__button" href={project.website} target="_blank" rel="noopener noreferrer">Website</a>
              </div>
            </Card>
          ))}
        </section>
      </main>
    )
  }
}

export default Project;