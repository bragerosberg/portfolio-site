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
            <Button href={project.repolink}>Repository</Button>
            <Button href={project.website} variant="info" className="project__button">Website</Button>
          </Card>
        ))}
      </main>
    )
  }
}

export default Project;