import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import Button from 'components/shared/button';
import Logo from 'images/logo.inline.svg';
import SubMenu from 'components/shared/header/sub-menu';

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
  const [isMenuHovered, setIsMenuHovered] = useState(false);

  return (
    <header className={cx('wrapper', { 'hovered-color': isMenuHovered })}>
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
              {menuItems.map((menuItem, index) => {
                const hasChildren = menuItem.childItems && menuItem.childItems.nodes.length > 0;
                return (
                  <li
                    className={cx('menu-item')}
                    key={index}
                    onMouseEnter={() => hasChildren && setIsMenuHovered(true)}
                    onMouseLeave={() => hasChildren && setIsMenuHovered(false)}
                  >
                    <Link className={cx('link', { 'arrow-hover': hasChildren })} to={menuItem.path}>{menuItem.label}</Link>
                    {hasChildren && (
                      <div className={cx('dropdown')}>
                        <SubMenu
                          post={menuItem.childItems.post}
                          items={menuItem.childItems.nodes}
                          onHover={setIsMenuHovered}
                        />
                      </div>
                    )}
                  </li>
                );
              })}
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
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
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
  language1Text: 'English',
  language1Url: '/',
  language2Text: 'Deutsch',
  language2Url: '/de',
  menuItems: [
    {
      label: 'Products',
      path: '#',
      childItems: {
        post: {
          url: '/',
          title: 'Report DevOps in Switzerland 2020',
        },
        nodes: [
          {
            label: 'Events',
            path: '/events',
          },
          {
            label: 'Partners',
            path: '/partners',
          },
          {
            label: 'Press review',
            path: '/press-review',
          },
        ],
      },
    },
    {
      label: 'Solutions',
      path: '#',
      childItems: {
        post: {
          url: '/',
          title: 'Report DevOps in Switzerland 2020',
        },
        nodes: [
          {
            label: 'Events',
            path: '/events',
          },
          {
            label: 'Engagement',
            path: '/engagement',
          },
          {
            label: 'Handbook',
            path: '/handbook',
          },
          {
            label: 'Partners',
            path: '/partners',
          },
          {
            label: 'Technology Partners',
            path: '/technology-partners',
          },
          {
            label: 'Success Stories',
            path: '/success-stories',
          },
          {
            label: 'Press review',
            path: '/press-review',
          },
          {
            label: 'What others say',
            path: '/what-others-say',
          },
        ],
      },
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
