import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import illustration from './images/illustration.svg';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';
import styles from './partners-hero.module.scss';

const cx = classNames.bind(styles);

const PartnersHero = (
  { title, subtitle, description, buttonLink: { url: buttonUrl }, buttonText },
) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h1" size="xs" color="secondary">{title}</Heading>
      <Heading className={cx('subtitle')} tag="p" size="xl">{subtitle}</Heading>
      <p className={cx('description')}>{description}</p>
      <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

      <div className={cx('illustration-wrapper')}>
        <img className={cx('illustration')} src={illustration} alt="" aria-hidden />
      </div>

      <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
      <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />
    </div>
  </section>
);

PartnersHero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default PartnersHero;
