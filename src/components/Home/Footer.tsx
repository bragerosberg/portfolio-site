import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    {
      title: 'Github',
      url: 'https://www.github.com/bragerosberg',
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/brage-rosberg',
    },
    {
      title: 'E-mail',
      url: 'mailto:brage@contact.com?subject=Contact from portfolio',
    },
  ];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank" rel="noopener noreferrer">
            {link.title}
          </a>
        </li>
      ))}
      <li className="footer__author">
        {t('home:MadeBy', { year: moment().year() })}
      </li>
    </ul>
  );
};

export default Footer;
