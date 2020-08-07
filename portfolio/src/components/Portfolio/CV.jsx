import React from 'react';
import './styles/CV.css';

const CV = (props) => {
  return (
    <section className="cv__wrapper">
      <p className="cv__date">{props.date}</p> 
      <p className="cv__description">{props.description}</p> 
    </section>
  )
}

export default CV;