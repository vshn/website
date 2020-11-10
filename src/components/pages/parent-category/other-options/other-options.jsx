import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './other-options.module.scss';

const cx = classNames.bind(styles);

const OtherOptions = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <li className={cx('item')} key={index}>{item}</li>
        ))}
      </ul>
    </div>
  </div>
);

OtherOptions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

OtherOptions.defaultProps = {

};

export default OtherOptions;
