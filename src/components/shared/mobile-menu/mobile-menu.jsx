import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './mobile-menu.module.scss';

const cx = classNames.bind(styles);

const MobileMenu = (props) => {
  const {
    language1Text,
    language2Text,
    pageUrls,
    menuItems,
    isOpen,
    locale,
    onCloseButtonClick,
  } = props;
  return (
    <nav className={cx('wrapper', { open: isOpen })}>
      <div className={cx('inner')}>
        <ul className={cx('lang-menu')}>
          <li className={cx('lang-menu-item')}>
            <Link className={cx('lang-menu-link')} to={pageUrls.en} activeClassName={cx('active')}>{language1Text}</Link>
          </li>
          <li className={cx('lang-menu-item')}>
            <Link className={cx('lang-menu-link')} to={pageUrls.de} activeClassName={cx('active')}>{language2Text}</Link>
          </li>
        </ul>
        <div className={cx('menu-wrapper')}>
          <ul className={cx('menu')}>
            {menuItems.map(({ label, path }, index) => (
              <li className={cx('menu-item')} key={index}>
                <Link className={cx('menu-link')} to={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <Button className={cx('button')} to={t[locale].login.url}>{t[locale].login.title}</Button>

        <button className={cx('close-button')} type="button" aria-label="Close Mobile Menu" onClick={onCloseButtonClick} />
      </div>
    </nav>
  );
};

MobileMenu.propTypes = {
  language1Text: PropTypes.string,
  language2Text: PropTypes.string,
  topMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    }),
  ),
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })),
  isOpen: PropTypes.bool,
  onCloseButtonClick: PropTypes.func.isRequired,
  pageUrls: PropTypes.shape().isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

MobileMenu.defaultProps = {
  language1Text: 'English',
  language2Text: 'Deutsch',
  topMenuItems: [],
  menuItems: [],
  isOpen: false,
};

export default MobileMenu;
