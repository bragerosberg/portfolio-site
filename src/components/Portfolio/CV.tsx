import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/CV.css';

type CVProps = {
  date: string;
  description: string;
}

const CV = ({date, description}: CVProps) => {
  const { t } = useTranslation();

  return (
    <section className="cv__wrapper">
      <p className="cv__date">{t(`portfolio:${date}`)}</p>
      <p className="cv__description">{t(`portfolio:${description}`)}</p>
    </section>
  );
}

export default CV;
