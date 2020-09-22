import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import backgroundImage from './images/background-image.svg';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title, categories, date }) => {
  const day = date.getDate();
  const options = {
    year: 'numeric',
    month: 'short',
  };
  const monthYear = date.toLocaleString('en-US', options);
  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('categories')}>
          {categories.map((category) => <span>{category}</span>)}
        </div>
        <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
        <div className={cx('date')}>
          <span>{day}</span>
          <span>. </span>
          <span>{monthYear}</span>
        </div>

        <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-4')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-5')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-6')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-7')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-8')} aria-hidden />
      </div>
      <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default Hero;
