import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/CV.css';
import { Experience } from './experience';

type CVProps = {
  img?: string;
} & Experience;

const CV = ({ date, translationKey, img }: CVProps) => {
  const { t } = useTranslation();

  return (
    <div className="cv__wrapper">
      {date && <b className="cv__date">{t(`portfolio:${date}`)}</b>}
      <p>{t(`portfolio:${translationKey}`)}</p>
      <img src={img} alt={img} />
    </div>
  );
};

export default CV;
