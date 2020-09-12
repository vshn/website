import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import illustration from './images/illustration.svg';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title, description, buttonText, buttonUrl }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>

      <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />

      <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
    </div>

    <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Hero;
