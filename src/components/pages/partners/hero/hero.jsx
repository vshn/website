import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './hero.module.scss';
import illustration from './images/illustration.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, buttonUrl, buttonText }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('category')} tag="h1" size="xs" color="secondary">{category}</Heading>
      <Heading className={cx('title')} tag="p" size="xl">{title}</Heading>
      <p className={cx('description')}>{description}</p>
      <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

      <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
      <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
      <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
    </div>
  </section>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Hero;
