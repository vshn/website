import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './hero.module.scss';
import backgroundImageLgDown from './images/background-image-lg-down.svg';
import backgroundImageLgUp from './images/background-image-lg-up.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, categories, date }) => {
  const day = new Date(date).getDate();
  const monthYear = new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
  });

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('categories-wrapper')}>
          {categories.nodes.map(({ name }, index) => <span className={cx('category')} key={index}>{name}</span>)}
        </div>

        <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
        <div className={cx('date')}>
          {day}
          .
          {' '}
          {monthYear}
        </div>
      </div>

      <img className={cx('background-image', 'lg-hidden')} src={backgroundImageLgUp} alt="" aria-hidden />
      <img className={cx('background-image', 'lg-visible')} src={backgroundImageLgDown} alt="" aria-hidden />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
  date: PropTypes.string.isRequired,
};

export default Hero;
