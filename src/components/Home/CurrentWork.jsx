import React from 'react';
import work from '../../assets/work.png';
import { useTranslation } from 'react-i18next';
import './styles/currentwork.css';

const CurrentWork = () => {
  const { t } = useTranslation();

  return (
    <div className="homepage__work__wrapper">
      <img src={work} alt="work" />
      <p className="homepage__role">{t('home:CurrentPosition')}</p>
    </div>
  );
};

export default CurrentWork;
