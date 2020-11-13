import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './advantages.module.scss';
import Item from './item';

const cx = classNames.bind(styles);

const Advantages = ({ title, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="xl">{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item number={index + 1} key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

Advantages.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
      imageName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Advantages;
