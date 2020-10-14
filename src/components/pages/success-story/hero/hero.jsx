import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading/';
import circles from './images/circles.svg';

import styles from './hero.module.scss';
import Facts from './facts';

const cx = classNames.bind(styles);

const Hero = ({ category, title, description, facts }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <span className={cx('category')}>{category}</span>
      <Heading className={cx('title')} tag="h2" size="xxl" color="tertiary" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <div className={cx('info')}>
        <Facts facts={facts} />
      </div>
      <img className={cx('circles')} src={circles} alt="" aria-hidden />
    </div>
  </div>
);

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  facts: PropTypes.shape({
    title: PropTypes.string.isRequired,
    items: PropTypes.arrayOf.isRequired,
  }).isRequired,
};

Hero.defaultProps = {

};

export default Hero;
