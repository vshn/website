import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);

const Hero = ({ title }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('breadcrumbs')}>
        <Link className={cx('link')} to="/">Solutions</Link>
        <Link className={cx('link')} to="/">DevOps Enablement</Link>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h1" size="xl">{title}</Heading>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
};

Hero.defaultProps = {

};

export default Hero;
