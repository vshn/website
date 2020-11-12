import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';

import styles from './facts.module.scss';

const cx = classNames.bind(styles);

const Facts = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="xl" color="primary" innerHTML={title} />
    <ul className={cx('items-wrapper')}>
      {items.map(({ item }, index) => (
        <li className={cx('item')} key={index}>
          <span className={cx('number')}>{index + 1}</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Facts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
  })).isRequired,
};

export default Facts;
