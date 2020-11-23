import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Breadcrumbs = ({ currentPageTitle, crumbs }) => (
  <div className={cx('breadcrumbs')}>
    {crumbs.map((crumb, index) => <Link key={index} className={cx('link')} to={crumb.link.url}>{crumb.link.title}</Link>)}
    <span>{currentPageTitle}</span>
  </div>
);

Breadcrumbs.defaultProps = {
  crumbs: [],
};

Breadcrumbs.propTypes = {
  currentPageTitle: PropTypes.string.isRequired,
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired),
};

const Hero = ({ title, breadcrumbs, hello }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      {breadcrumbs?.length > 0 && <Breadcrumbs currentPageTitle={title} crumbs={breadcrumbs} />}
      <Heading className={cx('title')} tag="h1" size="xl">{title}</Heading>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
  })),
};

Hero.defaultProps = {
  breadcrumbs: [],
};

export default Hero;
