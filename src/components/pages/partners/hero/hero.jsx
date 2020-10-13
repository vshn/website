import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import illustration from './images/illustration.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, buttonUrl, buttonText }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <span className={cx('category')}>{category}</span>
      <Heading className={cx('title')} tag="h2" size="xl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

      <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
      <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
      <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
    </div>
  </div>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Hero;
