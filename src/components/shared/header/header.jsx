import classNames from 'classnames/bind';
import { useStaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Link from 'components/shared/link';
import logo from 'images/logo.svg';

import styles from './header.module.scss';
import DeutschIcon from './images/deutsch.inline.svg';
import EnglishIcon from './images/english.inline.svg';
import SubMenu from './sub-menu';

const cx = classNames.bind(styles);

const getIndexURL = (locale) => (locale === 'en' ? '/en/' : '/');

const Header = (props) => {
  const {
    allWpMenuBanner: { banners },
  } = useStaticQuery(
    graphql`
      {
        allWpMenuBanner {
          banners: nodes {
            title
            acf {
              linkText
              link {
                url
              }
              assignTo {
                url
              }
            }
          }
        }
      }
    `,
  );
  const {
    language1Text,
    language2Text,
    menuItems,
    topMenuItems,
    onBurgerClick,
    pageUrls,
    locale,
  } = props;

  const [isMenuItemHovered, setIsMenuItemHovered] = useState(false);

  const handleMenuItemMouseEnter = () => setIsMenuItemHovered(true);
  const handleMenuItemMouseLeave = () => setIsMenuItemHovered(false);

  return (
    <header className={cx('wrapper', { menuItemIsHovered: isMenuItemHovered })}>
      <div className="container">
        <div className={cx('section', 'top-section')}>
          <ul className={cx('list')}>
            {topMenuItems.map(({ label, path, target }, i) => (
              <Link key={i} className={cx('list-item')} to={path} target={target}>
                {label}
              </Link>
            ))}
          </ul>

          <ul className={cx('list')}>
            <li className={cx('list-item')}>
              <Link
                className={cx('list-link')}
                to={pageUrls.en}
                activeClassName={cx('active')}
              >
                <EnglishIcon className={cx('icon')} />
                {language1Text}
              </Link>
            </li>
            <li className={cx('list-item')}>
              <Link
                className={cx('list-link')}
                to={pageUrls.de}
                activeClassName={cx('active')}
              >
                <DeutschIcon className={cx('icon')} />
                {language2Text}
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx('section')}>
          <Link to={getIndexURL(locale)}>
            <img className={cx('logo')} src={logo} alt="Logo" />
          </Link>

          <nav className={cx('nav')}>
            <ul className={cx('menu')}>
              {menuItems.map(({ label, path, childItems }, index) => {
                const withSubMenu = childItems && childItems.nodes.length > 0;
                const banner = banners.find(
                  (item) => item.acf.assignTo.url === path,
                );
                return (
                  <li
                    className={cx('menu-item', { withSubMenu })}
                    key={index}
                    onMouseEnter={withSubMenu ? handleMenuItemMouseEnter : null}
                    onMouseLeave={withSubMenu ? handleMenuItemMouseLeave : null}
                  >
                    <Link className={cx('link')} to={path}>
                      {label}
                    </Link>
                    {withSubMenu && (
                      <SubMenu
                        className={cx('sub-menu')}
                        items={childItems.nodes}
                        banner={banner}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            className={cx('burger')}
            type="button"
            aria-label="Open Mobile Menu"
            onClick={onBurgerClick}
          >
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
  language1Text: PropTypes.string,
  language2Text: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      childItems: PropTypes.shape({
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
          }),
        ),
      }),
    }),
  ),
  topMenuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),
  onBurgerClick: PropTypes.func.isRequired,
  pageUrls: PropTypes.shape().isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

Header.defaultProps = {
  language1Text: 'English',
  language2Text: 'Deutsch',
  menuItems: [],
  topMenuItems: [],
};

export default Header;
