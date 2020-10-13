import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';
import PartnerInfo from 'components/shared/partner-info';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, items, url }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('category')} tag="p" size="sm" color="secondary">{category}</Heading>
      <Heading className={cx('title')} tag="h2" size="xl" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <div className={cx('info')}><PartnerInfo items={items} url={url} /></div>
    </div>
  </div>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
  url: PropTypes.string.isRequired,
};

Hero.defaultProps = {

};

export default Hero;
