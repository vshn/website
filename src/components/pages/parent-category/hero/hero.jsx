import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './hero.module.scss';
import illustration from './images/illustration.svg';
import shape from './images/shape.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, subtitle, description }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h1" size="xs" color="secondary">{title}</Heading>
      <Heading className={cx('subtitle')} tag="p" size="xl">{subtitle}</Heading>
      <div className={cx('description')} dangerouslySetInnerHTML={{ __html: description }} />

      <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
      <img className={cx('shape')} src={shape} alt="" aria-hidden />
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Hero;
