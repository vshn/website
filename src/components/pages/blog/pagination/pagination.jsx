import React from 'react';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import styles from './pagination.module.scss';
import Arrow from './svg/arrow.inline.svg';

const cx = classNames.bind(styles);

const Pagination = () => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('links')}>
        <Link className={cx('item', 'previous')} to="/">
          <Arrow />
          <span>Older posts</span>
        </Link>
        <Link className={cx('item', 'next')} to="/">
          <span>Newer posts</span>
          <Arrow />
        </Link>
      </div>
    </div>
  </div>
);

export default Pagination;
