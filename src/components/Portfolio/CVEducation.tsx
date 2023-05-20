import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './styles/CV.css';
import { Experience } from './experience';

type CVProps = {
  img?: string;
} & Experience;

const CV = ({ date, translationKey, img, subjects }: CVProps) => {
  const [viewMore, toggleViewMore] = useState(false);
  const { t } = useTranslation();

  return (
    <article className="cv__wrapper">
      {date && <p className="cv__date">{t(`portfolio:${date}`)}</p>}
      <div className="cv__study">
        <b className="cv__description--edu">
          {t(`portfolio:${translationKey}`)}
        </b>
        {subjects && (
          <>
            {!viewMore && <p className="cv__view-subjects" onClick={() => toggleViewMore(true)}>{t('portfolio:ViewSubjects')}</p>}
            {viewMore && subjects?.map((subject) => <p>{subject}</p>)}
          </>
        )}
      </div>
      <img src={img} alt={img} />
    </article>
  );
};

export default CV;
