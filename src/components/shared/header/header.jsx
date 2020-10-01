import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import Button from 'components/shared/button';
import Logo from 'images/logo.inline.svg';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = (props) => {
  const {
    topLineText1,
    topLineText2,
    language1Text,
    language1Url,
    language2Text,
    language2Url,
    menuItems,
    buttonText,
    buttonUrl,
    onBurgerClick,
  } = props;

  return (
    <header className={cx('wrapper')}>
      <div className="container">
        <div className={cx('section', 'top-section')}>
          <ul className={cx('list')}>
            <li className={cx('list-item')}>{topLineText1}</li>
            <li className={cx('list-item')}>{topLineText2}</li>
          </ul>

          <ul className={cx('list')}>
            <li className={cx('list-item')}>
              <Link className={cx('list-link')} to={language1Url} activeClassName={cx('active')}>{language1Text}</Link>
            </li>
            <li className={cx('list-item')}>
              <Link className={cx('list-link')} to={language2Url} activeClassName={cx('active')}>{language2Text}</Link>
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
                <li className={cx('menu-item')} key={index}>
                  <Link className={cx('link')} to={path}>{label}</Link>
                </li>
              ))}
            </ul>
            {buttonText && buttonUrl && (
              <Button className={cx('button')} to={buttonUrl} size="sm">{buttonText}</Button>
            )}
          </nav>

          <button className={cx('burger')} type="button" aria-label="Open Mobile Menu" onClick={onBurgerClick}>
            <span className={cx('burger-line')} />
            <span className={cx('burger-line')} />
            <span className={cx('burger-line')} />
          </button>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  topLineText1: PropTypes.string,
  topLineText2: PropTypes.string,
  language1Text: PropTypes.string,
  language1Url: PropTypes.string,
  language2Text: PropTypes.string,
  language2Url: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  topLineText1: 'Vision - the DevOps company',
  topLineText2: 'Neugasse 10, CH-8005 Zürich',
  language1Text: 'Deutsch',
  language1Url: '/',
  language2Text: 'English',
  language2Url: '/en',
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
