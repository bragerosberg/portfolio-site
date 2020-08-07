import React from 'react';
import './styles/Progress.css';


const Progress = (props) => {
  return (
  <section className="progress--content">
    <h3 className="portfolio__experience--name">{props.title}</h3>
    <div className="progress">
      <div className="progress-bar bg-info progress-bar-striped progress-bar-animated" role="progressbar" style={{width: props.width}}></div>
    </div>
  </section>
)
}

export default Progress;