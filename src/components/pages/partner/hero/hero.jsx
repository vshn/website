import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import Link from 'components/shared/link';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);
const Hero = ({ title, acf: { category, description } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <Link className={cx('category')} to={category.url}>{category.title}</Link>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    category: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
