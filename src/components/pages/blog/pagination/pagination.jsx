import React from 'react';
// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './pagination.module.scss';
import Arrow from './svg/arrow.inline.svg';
import Link from '../../../shared/link';

const cx = classNames.bind(styles);

const Pagination = () => (
  <div className={cx('wrapper')}>
    <Link className={cx('link', 'previous')} to="/">
      <Arrow />
      <span>Older posts</span>
    </Link>
    <Link className={cx('link', 'next')} to="/">
      <span>Newer posts</span>
      <Arrow />
    </Link>
  </div>
);

export default Pagination;
