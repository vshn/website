import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import Button from 'components/shared/button';
import Logo from 'images/logo.inline.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = ({ menuItems, buttonText, buttonUrl }) => (
  <header className={cx('wrapper')}>
    <div className="container">
      <div className={cx('section')}>
        <ul className={cx('list')}>
          <li>
            Vision - the DevOps company
          </li>
          <li>
            Neugasse 10, CH-8005 Zürich
          </li>
        </ul>

        <ul className={cx('list')}>
          <li>
            <Link to="/" activeClassName={cx('active')}>English</Link>
          </li>
          <li>
            <Link to="/de" activeClassName={cx('active')}>Deutsch</Link>
          </li>
        </ul>
      </div>
      <div className={cx('section')}>
        <Link to="/">
          <Logo className={cx('logo')} />
        </Link>

        <nav className={cx('nav')}>
          <ul className={cx('menu')}>
            {menuItems.map(({ label, path }, index) => (
              <li key={index}>
                <Link className={cx('link')} to={path}>{label}</Link>
              </li>
            ))}
          </ul>
          {
          buttonText && buttonUrl && (
            <Button to={buttonUrl} size="sm">{buttonText}</Button>
          )
        }
        </nav>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
};

Header.defaultProps = {
  menuItems: [
    {
      label: 'Products',
      path: '/products',
    },
    {
      label: 'Solutions',
      path: '/solutions',
    },
    {
      label: 'Resources',
      path: '/resources',
    },
    {
      label: 'References',
      path: '/references',
    },
    {
      label: 'About',
      path: '/about',
    },
  ],
  buttonText: 'Contact Us',
  buttonUrl: '/contact',
};

export default Header;
