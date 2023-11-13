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
    <article className="cv__wrapper">
      {date && <p className="cv__date">{t(`portfolio:${date}`)}</p>}
      <p>{t(`portfolio:${translationKey}`)}</p>
      <img src={img} alt={img} />
    </article>
  );
};

export default CV;
