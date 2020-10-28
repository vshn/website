import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './sub-menu.module.scss';

const cx = classNames.bind(styles);

const SubMenu = ({ className, post, items }) => (
  <div className={cx('wrapper', { withoutPost: !post }, className)}>
    <div className={cx('container', 'inner')}>
      {
        post && (
          <Link className={cx('post')} to={post.url}>
            <Heading className={cx('post-title')} tag="h2" size="md" color="tertiary">{post.title}</Heading>
            <span className={cx('post-footer-text')}>{post.footerText}</span>
            <span className={cx('post-rectangle', 'post-rectangle-1')} aria-hidden />
            <span className={cx('post-rectangle', 'post-rectangle-2')} aria-hidden />
            <span className={cx('post-rectangle', 'post-rectangle-3')} aria-hidden />
            <span className={cx('post-ellipse', 'post-ellipse-1')} aria-hidden />
            <span className={cx('post-ellipse', 'post-ellipse-2')} aria-hidden />
            <span className={cx('post-ellipse', 'post-ellipse-3')} aria-hidden />
          </Link>
        )
      }

      <ul className={cx('items')}>
        {items.map(({ label, path }, index) => (
          <li key={index}>
            <Link to={path}>{label}</Link>
          </li>
        ))}
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
