import React from 'react';
import { Card, Button } from "react-bootstrap";
import { myProjects } from './projects';
import './styles/Project.css';

class Project extends React.Component {
  render () {
    return (
      <>
        {myProjects.map(project => (
          <Card key={project.index} style={{ width: "18rem" }} className="box">
            <Card.Img variant="top" src="holder.js/100px180" src={project.image} />
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.text}</Card.Text>
            <Button variant="warning">View Website</Button>
          </Card>
        ))}
      </>
    )
  }
}

export default Project;