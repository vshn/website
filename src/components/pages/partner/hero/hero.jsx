import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';
import PartnerInfo from 'components/shared/partner-info';
import SuccessStoriesCard from 'components/shared/success-stories-card';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, partnerInfo, story }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <span className={cx('category')}>{category}</span>
      <Heading className={cx('title')} tag="h1" size="xl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <div className={cx('info')}>
        <PartnerInfo {...partnerInfo} />
        <SuccessStoriesCard {...story} />
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  partnerInfo: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ),
    url: PropTypes.string.isRequired,
  }).isRequired,
  story: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footerUrl: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
  }).isRequired,
};

Hero.defaultProps = {

};

export default Hero;
