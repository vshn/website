import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import Heading from 'components/shared/heading';

import styles from './sub-menu.module.scss';

const cx = classNames.bind(styles);

const SubMenu = ({ items }) => (
  <div className={cx('container', 'dropdown-wrapper')}>
    <article className={cx('post')}>
      <Heading className={cx('post-title')} tag="h2" size="md" color="tertiary">Report DevOps in Switzerland 2020</Heading>
      <Link className={cx('post-link')} to="/">Read more</Link>
      <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
      <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
      <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-1')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-2')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-3')} aria-hidden />
    </article>
    <ul className={cx('list')}>
      {items.map((item, index) => (
        <li className={cx('item')} key={index}>
          <Link className={cx('link')} to={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  </div>
);

SubMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default SubMenu;
