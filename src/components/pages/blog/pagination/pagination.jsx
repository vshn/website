import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import Arrow from './images/arrow.inline.svg';
import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = ({ previousText, previousUrl, nextText, nextUrl }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <div className={cx('items-wrapper')}>
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
  previousUrl: PropTypes.string.isRequired,
  nextText: PropTypes.string.isRequired,
  nextUrl: PropTypes.string.isRequired,
};

export default Pagination;
