import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar__routes">
      <ul>
        <li>
          <Link to="/">{t('home:Portfolio')}</Link>
        </li>
        <li>
          <Link to="/project">{t('home:Projects')}</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
