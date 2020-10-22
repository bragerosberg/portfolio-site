import React from 'react';
import { Card } from "react-bootstrap";
import { myProjects } from './projects';
import './styles/Project.css';

class Project extends React.Component {
  render () {
    return (
      <main>
        <h1 className="project__title">Products I have created</h1>

        <section className="project__wrapper">
          {myProjects.map(project => (
            <Card key={project.index} style={{ width: "18rem" }} className="project__card">
              <Card.Img variant="top" className="project__image" src={project.image} />
              <Card.Title style={{textAlign: "center"}}>{project.title}</Card.Title>
              <Card.Text>{project.text}</Card.Text>
              <Card.Footer>Topics: {project.topics}</Card.Footer>
              <div className="button__wrapper">
                <a className="link__button" className="btn btn-light" href={project.repolink} target="_blank" rel="noopener noreferrer">Repository</a>
                {(project.website ? <a className="link__button" className="btn btn-light" href={project.website} target="_blank" rel="noopener noreferrer">Website</a> : null)} 
              </div>
            </Card>
          ))}
        </section>

      </main>
    )
  }
}

export default Project;