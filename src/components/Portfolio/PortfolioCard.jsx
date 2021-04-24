import React from 'react';

const PortfolioCard = ({portfolioList, name}) => (
    <div className="portfolio__experience__card">
      <h2 className="portfolio__experience--category">{name}</h2>
      {portfolioList.map(e => <div className="portfolio__experience--category__wrapper" key={e.key}>
        <h4 className="portfolio__experience--name">{e.title}</h4>
        <span className="iconify" data-icon={e.icon} data-inline="false" data-width="30"></span>
      </div>)}
    </div>
)

export default PortfolioCard;