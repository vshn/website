import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';

import styles from './facts.module.scss';

const cx = classNames.bind(styles);

const Facts = ({ facts }) => (
  <div className={cx('wrapper')}>
    <Heading className={cx('title')} tag="h2" size="lg" color="secondary" innerHTML={facts.title} />
    <ul className={cx('items-wrapper')}>
      {facts.items.map((item, index) => (
        <li className={cx('item')} key={index}>
          <span className={cx('number')}>{index + 1}</span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

Facts.propTypes = {
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

Facts.defaultProps = {

};

export default Facts;
