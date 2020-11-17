import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading/';
import t from 'i18n';

import styles from './hero.module.scss';
import circles from './images/circles.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, locale, acf: { description } }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <span className={cx('category')}>{t[locale].successStory.breadcrumbRoot}</span>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h2" size="xxl" color="tertiary">{title}</Heading>
      <p className={cx('description')}>{description}</p>
      <img className={cx('circles')} src={circles} alt="" aria-hidden />
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  locale: PropTypes.oneOf(['de', 'en']).isRequired,
};

Hero.defaultProps = {

};

export default Hero;
