import React from 'react';

const PortfolioCard = (props) => (
    <div className="portfolio__experience__card">
      <h2 className="portfolio__experience--category">{props.name}</h2>
      {props.portfolioList.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
        <h4 className="portfolio__experience--name">{e.title}</h4>
        <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
      </div>)}
    </div>
)

export default PortfolioCard;