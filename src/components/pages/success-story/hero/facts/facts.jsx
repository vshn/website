import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';

import styles from './facts.module.scss';

const cx = classNames.bind(styles);

const Facts = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="lg" color="secondary" innerHTML={title} />
    <ul className={cx('items-wrapper')}>
      {items.map((item, index) => (
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
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
};

Facts.defaultProps = {

};

export default Facts;
