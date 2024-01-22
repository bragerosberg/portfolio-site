import React from 'react';
import './styles/Portfolio.css';

type PortfolioCardProps = {
  portfolioList: { key: string; title: string; icon: string }[];
  name: string;
};

const PortfolioCard = ({ portfolioList, name }: PortfolioCardProps) => (
  <div className="portfolio__experience__card" role="list">
    <h2 className="portfolio__experience--category">{name}</h2>
    {portfolioList.map(({ key, title, icon }) => (
      <div
        className="portfolio__experience--category__wrapper"
        role="listitem"
        key={key}
      >
        <h4 className="portfolio__experience--name">{title}</h4>
        <span
          className="iconify"
          data-icon={icon}
          data-inline="false"
          data-width="48"
        />
      </div>
    ))}
  </div>
);

export default PortfolioCard;
