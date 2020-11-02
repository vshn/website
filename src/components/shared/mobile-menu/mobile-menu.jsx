import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';

import styles from './mobile-menu.module.scss';

const cx = classNames.bind(styles);

const MobileMenu = (props) => {
  const {
    language1Text,
    language1Url,
    language2Text,
    language2Url,
    menuItems,
    buttonText,
    buttonUrl,
    isOpen,
    onCloseButtonClick,
  } = props;

  return (
    <nav className={cx('wrapper', { open: isOpen })}>
      <div className={cx('inner')}>
        <ul className={cx('lang-menu')}>
          <li className={cx('lang-menu-item')}>
            <Link className={cx('lang-menu-link')} to={language1Url} activeClassName={cx('active')}>{language1Text}</Link>
          </li>
          <li className={cx('lang-menu-item')}>
            <Link className={cx('lang-menu-link')} to={language2Url} activeClassName={cx('active')}>{language2Text}</Link>
          </li>
        </ul>

        <ul className={cx('menu')}>
          {menuItems.map(({ label, path }, index) => (
            <li className={cx('menu-item')} key={index}>
              <Link className={cx('menu-link')} to={path}>{label}</Link>
            </li>
          ))}
        </ul>

        <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

        <button className={cx('close-button')} type="button" aria-label="Close Mobile Menu" onClick={onCloseButtonClick} />
      </div>
    </nav>
  );
};

MobileMenu.propTypes = {
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
  isOpen: PropTypes.bool,
  onCloseButtonClick: PropTypes.func.isRequired,
};

MobileMenu.defaultProps = {
  language1Text: 'English',
  language1Url: '/',
  language2Text: 'Deutsch',
  language2Url: '/de',
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
  buttonUrl: '/',
  isOpen: false,
};

export default MobileMenu;
