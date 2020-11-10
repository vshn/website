import classNames from 'classnames/bind';
import { useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Link from 'components/shared/link';
import Logo from 'images/logo.inline.svg';
import filterNonRootItems from 'utils/filter-non-root-items';

import styles from './header.module.scss';
import deutsch from './images/deutsch.svg';
import english from './images/english.svg';
import SubMenu from './sub-menu';

const cx = classNames.bind(styles);

const Header = (props) => {
  const {
    wpMenu: {
      menuItems: { nodes: menuItemsNodes },
    },
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
        wpMenu(slug: { eq: "main-menu-english" }) {
          menuItems {
            nodes {
              label
              path
              parentId
              childItems {
                nodes {
                  label
                  path
                  childItems {
                    nodes {
                      label
                      path
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  );
  const {
    topLineText1,
    topLineText1Url,
    topLineText2,
    topLineText2Url,
    topLineText3,
    topLineText3Url,
    language1Text,
    language1Url,
    language2Text,
    language2Url,
    onBurgerClick,
  } = props;

  const [isMenuItemHovered, setIsMenuItemHovered] = useState(false);

  const handleMenuItemMouseEnter = () => setIsMenuItemHovered(true);
  const handleMenuItemMouseLeave = () => setIsMenuItemHovered(false);

  // Graphql does not allow to filter by null values so has to do it manually
  const menuItems = filterNonRootItems(menuItemsNodes);

  return (
    <header className={cx('wrapper', { menuItemIsHovered: isMenuItemHovered })}>
      <div className="container">
        <div className={cx('section', 'top-section')}>
          <ul className={cx('list')}>
            <Link className={cx('list-item')} to={topLineText1Url}>
              {topLineText1}
            </Link>
            <Link className={cx('list-item')} to={topLineText2Url}>
              {topLineText2}
            </Link>
            <Link className={cx('list-item')} to={topLineText3Url}>
              {topLineText3}
            </Link>
          </ul>

          <ul className={cx('list')}>
            <li className={cx('list-item')}>
              <Link
                className={cx('list-link')}
                to={language1Url}
                activeClassName={cx('active')}
              >
                <img className={cx('icon')} src={english} alt="" aria-hidden />
                {language1Text}
              </Link>
            </li>
            <li className={cx('list-item')}>
              <Link
                className={cx('list-link')}
                to={language2Url}
                activeClassName={cx('active')}
              >
                <img className={cx('icon')} src={deutsch} alt="" aria-hidden />
                {language2Text}
              </Link>
            </li>
          </ul>
        </div>
        <div className={cx('section')}>
          <Link to="/">
            <Logo className={cx('logo')} />
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
  topLineText1: PropTypes.string,
  topLineText1Url: PropTypes.string,
  topLineText2: PropTypes.string,
  topLineText2Url: PropTypes.string,
  topLineText3: PropTypes.string,
  topLineText3Url: PropTypes.string,
  language1Text: PropTypes.string,
  language1Url: PropTypes.string,
  language2Text: PropTypes.string,
  language2Url: PropTypes.string,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      childItems: PropTypes.shape({
        post: PropTypes.shape({
          url: PropTypes.string,
          title: PropTypes.string,
        }),
        nodes: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            path: PropTypes.string,
          }),
        ),
      }),
    }),
  ),
  onBurgerClick: PropTypes.func.isRequired,
};

Header.defaultProps = {
  topLineText1: 'Status',
  topLineText1Url: '/',
  topLineText2: 'Docs',
  topLineText2Url: '/',
  topLineText3: 'Supports',
  topLineText3Url: '/',
  language1Text: 'English',
  language1Url: '/en',
  language2Text: 'Deutsch',
  language2Url: '/',
};

export default Header;
