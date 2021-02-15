import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Breadcrumbs from 'components/shared/breadcrumbs';
import Heading from 'components/shared/heading';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ breadcrumbs, title, pageTitle, description, backgroundImage }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      {breadcrumbs?.length > 0 && <Breadcrumbs currentPageTitle={title} crumbs={breadcrumbs} />}
      <Heading className={cx('title')} tag="h1" size="xl">{pageTitle}</Heading>
      {description && <p className={cx('description')}>{description}</p>}
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
);

Hero.propTypes = {
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
  })),
  title: PropTypes.string.isRequired,
  pageTitle: PropTypes.string.isRequired,
  description: PropTypes.string,
  backgroundImage: PropTypes.string.isRequired,
};

Hero.defaultProps = {
  breadcrumbs: [],
  description: '',
};

export default Hero;
