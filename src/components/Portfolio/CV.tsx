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
    <section className="cv__wrapper">
      <p className="cv__date">{t(`portfolio:${date}`)}</p>
      <p className="cv__description">{t(`portfolio:${translationKey}`)}</p>
      <img src={img} alt={img} />
    </section>
  );
};

export default CV;
