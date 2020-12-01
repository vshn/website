import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Arrow from './images/arrow.inline.svg';
import styles from './open-positions.module.scss';

const cx = classNames.bind(styles);

const OpenPositions = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
    <div className={cx('list')}>
      {items.map(({ url, title }, index) => (
        <div className={cx('item-wrapper')}>
          <div className={cx('number')}>
            <span>{index + 1}</span>
          </div>
          <div className={cx('item')}>
            <Link className={cx('link')} key={index} to={url}>
              {title}
            </Link>
            <Arrow className={cx('arrow')} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

OpenPositions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default OpenPositions;
