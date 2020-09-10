import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import illustration from './images/illustration.svg';
import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({
  title, description, buttonText, buttonUrl,
}) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>
      <img className={cx('illustration')} src={illustration} alt="Illustration" />
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Hero;
