import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/CV.css';
import { Experience } from './experience';

const CV = ({ date, translationKey }: Experience) => {
  const { t } = useTranslation();

  return (
    <section className="cv__wrapper">
      <p className="cv__date">{t(`portfolio:${date}`)}</p>
      <p className="cv__description">{t(`portfolio:${translationKey}`)}</p>
    </section>
  );
}

export default CV;
