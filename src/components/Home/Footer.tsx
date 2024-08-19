import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';
import './styles/Footer.css';

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
    <section className="footer__links">
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {link.title}
            </a>
          </li>
        ))}
        <li className="footer__author">
          <i>{t('home:MadeBy', { year: moment().year() })}</i>
        </li>
      </ul>
    </section>
  );
};

export default Footer;
