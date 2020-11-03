import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import Link from 'components/shared/link';
import PartnerInfo from 'components/shared/partner-info';
import SuccessStoryCard from 'components/shared/success-story-card';

import styles from './hero.module.scss';
import backgroundImage from './images/background-image.svg';

const cx = classNames.bind(styles);
const Hero = ({ title, acf: { category, description, partnerInfo, successStoryCard } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <Link className={cx('category')} to={category.url}>{category.title}</Link>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h1" size="xxl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <div className={cx('info-wrapper')}>
        <PartnerInfo {...partnerInfo} />
        <SuccessStoryCard {...successStoryCard} />
      </div>
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
    partnerInfo: PropTypes.shape({
      items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        }),
      ).isRequired,
      partnerLink: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    successStoryCard: PropTypes.shape({
      successStory: PropTypes.shape({
        title: PropTypes.string.isRequired,
        acf: PropTypes.shape({
          category: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        }),
        uri: PropTypes.string.isRequired,
      }).isRequired,
      footerText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

Hero.defaultProps = {

};

export default Hero;
