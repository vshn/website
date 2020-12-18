import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import SubSubMenu from '../sub-sub-menu';

import styles from './sub-menu.module.scss';

const cx = classNames.bind(styles);

const SubMenu = ({ className, items, banner }) => (
  <div className={cx('wrapper', className)}>
    <div className={cx('container', 'inner')}>
      {
        banner && (
          <Link className={cx('banner')} to={banner.acf.link.url}>
            <Heading className={cx('banner-title')} tag="h2" size="md" color="tertiary">{banner.title}</Heading>
            <span className={cx('banner-link-text')}>{banner.acf.linkText}</span>
          </Link>
        )
      }
      <ul className={cx('items')}>
        {items.map(({ label, path, childItems }, index) => {
          const withSubMenu = childItems && childItems.nodes.length > 0;
          return (
            <li key={index} className={cx('item', { 'with-sub-menu': withSubMenu })}>
              <Link to={path}>{label}</Link>
              {withSubMenu && (
                <SubSubMenu className={cx('sub-menu')} items={childItems.nodes} />
              )}
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);
SubMenu.propTypes = {
  className: PropTypes.string,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }),
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

SubMenu.defaultProps = {
  className: null,
  post: null,
};

export default SubMenu;
