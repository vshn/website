import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';

import backgroundImage from './images/background-image.svg';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <span className={cx('category')}>{category}</span>
      <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

Hero.defaultProps = {

};

export default Hero;
