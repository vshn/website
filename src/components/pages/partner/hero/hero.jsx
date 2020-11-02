import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';

import PartnerInfo from 'components/shared/partner-info';
import SuccessStoriesCard from 'components/shared/success-stories-card';
import backgroundImage from './images/background-image.svg';
import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, partnerInfo, story }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <span className={cx('category')}>{category}</span>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <div className={cx('info-wrapper')}>
        <PartnerInfo {...partnerInfo} />
        <SuccessStoriesCard {...story} />
      </div>
    </div>
    <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
  </section>
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
