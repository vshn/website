import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import Heading from 'components/shared/heading';

import styles from './sub-menu.module.scss';

const cx = classNames.bind(styles);

const SubMenu = ({ post, items }) => (
  <div className={cx('container', 'dropdown-wrapper')}>
    <Link className={cx('post')} to={post.url}>
      <Heading className={cx('title')} tag="h2" size="md" color="tertiary">{post.title}</Heading>
      <span className={cx('read-more')}>Read more</span>
      <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
      <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
      <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-1')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-2')} aria-hidden />
      <span className={cx('ellipse', 'ellipse-3')} aria-hidden />
    </Link>
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
  post: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default SubMenu;
