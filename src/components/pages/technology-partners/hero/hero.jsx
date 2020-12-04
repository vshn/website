import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);

const Hero = ({ breadcrumbSlug, breadcrumbRoot, title, subtitle }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('crumbs-wrapper')}>
        <Link className={cx('crumb')} to={breadcrumbSlug}>{breadcrumbRoot}</Link>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} size="xl">{subtitle}</Heading>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  breadcrumbSlug: PropTypes.string.isRequired,
  breadcrumbRoot: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Hero;
