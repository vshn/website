import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h1" size="xl">{title}</Heading>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Hero;
