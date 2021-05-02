import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment'

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <ul>
      <li><a href="https://www.github.com/bragerosberg" target="_blank" rel="noopener noreferrer">Github</a></li>
      <li className="footer__author">{t('home:MadeBy', { year: moment().year() })}</li>

      <li><a href="https://www.linkedin.com/in/brage-rosberg" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
    </ul>
  );
}

export default Footer;