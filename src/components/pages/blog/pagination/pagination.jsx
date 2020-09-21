import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';
import styles from './pagination.module.scss';
import Arrow from './svg/arrow.inline.svg';

const cx = classNames.bind(styles);

const Pagination = ({ previousText, nextText, previousUrl, nextUrl }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('links')}>
        {previousUrl && (
          <Link className={cx('item', 'previous')} to={previousUrl}>
            <Arrow />
            <span>{previousText}</span>
          </Link>
        )}
        {nextUrl && (
          <Link className={cx('item', 'next')} to={nextUrl}>
            <span>{nextText}</span>
            <Arrow />
          </Link>
        )}
      </div>
    </div>
  </div>
);

Pagination.propTypes = {
  previousText: PropTypes.string.isRequired,
  nextText: PropTypes.string.isRequired,
  previousUrl: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};

export default Pagination;
