import React from 'react';
import { Card, Button } from "react-bootstrap";
import { myProjects } from './projects';
import './styles/Project.css';

class Project extends React.Component {
  render () {
    return (
      <main className="project__wrapper">
        {myProjects.map(project => (
          <Card key={project.index} style={{ width: "18rem" }} className="project__card">
            <Card.Img variant="top" className="project__image" src={project.image} />
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.text}</Card.Text>
            <button href={project.repolink} className="project__button">Repository</button>
            <button href={project.website} className="project__button">Website</button>
          </Card>
        ))}
      </main>
    )
  }
}

export default Project;