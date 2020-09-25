import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import backgroundImage from './images/background-image.svg';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title, categories, date }) => {
  const day = date.getDate();
  const monthYear = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('categories-wrapper')}>
          {categories.map((category, index) => <span className={cx('category')} key={index}>{category}</span>)}
        </div>

        <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
        <div className={cx('date')}>
          {day}
          .
          {' '}
          {monthYear}
        </div>
      </div>

      <div className={cx('background-image-wrapper')} aria-hidden>
        <img src={backgroundImage} alt="" />
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Hero;
