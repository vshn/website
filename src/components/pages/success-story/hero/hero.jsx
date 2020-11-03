import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';

import Facts from '../facts';

import styles from './hero.module.scss';
import circles from './images/circles.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, acf: { category, description, facts } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <span className={cx('category')}>{category}</span>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h2" size="xxl" color="tertiary">Acrevis Bank & VSHN</Heading>
      <p className={cx('description')}>{description}</p>
      <img className={cx('circles')} src={circles} alt="" aria-hidden />
      <div className={cx('info-wrapper')}>
        <Facts {...facts} />
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    facts: PropTypes.shape({
      title: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
      })).isRequired,
    }).isRequired,
  }).isRequired,
};

Hero.defaultProps = {

};

export default Hero;
