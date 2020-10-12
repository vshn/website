import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';
import PartnerInfo from 'components/pages/partner/partner-info';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, details, url }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('category')} tag="p" size="sm" color="secondary">{category}</Heading>
      <Heading className={cx('title')} tag="h2" size="xl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <PartnerInfo details={details} url={url} />
    </div>
  </div>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

Hero.defaultProps = {

};

export default Hero;
