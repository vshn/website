import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import arrow from './images/arrow.svg';
import styles from './open-positions.module.scss';

const cx = classNames.bind(styles);

const OpenPositions = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
    <div className={cx('list')}>
      {items.map(({ url, title }, index) => (
        <Link className={cx('item-wrapper')} key={index} to={url}>
          <div className={cx('item')}>
            <div className={cx('number')}>
              <span>{index + 1}</span>
            </div>
            {title}
          </div>
          <img className={cx('arrow')} src={arrow} alt="" aria-hidden />
        </Link>
      ))}
    </div>
  </div>
);

OpenPositions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

OpenPositions.defaultProps = {

};

export default OpenPositions;
