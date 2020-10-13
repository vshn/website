import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';

import styles from './facts.module.scss';

const cx = classNames.bind(styles);

const Facts = ({ title, items }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="xxl" color="secondary" innerHTML={title} />
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  </div>
);

Facts.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf.isRequired,
};

Facts.defaultProps = {

};

export default Facts;
