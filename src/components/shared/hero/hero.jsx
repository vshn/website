import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Breadcrumbs from 'components/shared/breadcrumbs';
import Heading from 'components/shared/heading';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ breadcrumbs, title, subtitle, backgroundImage }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      {breadcrumbs?.length > 0 && <Breadcrumbs currentPageTitle={title} crumbs={breadcrumbs} />}
      <Heading className={cx('title')} size="xl">{subtitle}</Heading>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
  })),
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  breadcrumbs: [],
};

export default Hero;
