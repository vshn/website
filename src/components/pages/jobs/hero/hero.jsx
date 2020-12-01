import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ locale, title, image }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('category-wrapper')}>
        <Link className={cx('category')} to={t[locale].jobs.breadcrumbSlug}>{t[locale].jobs.breadcrumbRoot}</Link>
        <span>{title}</span>
      </div>
      <Heading className={cx('title')} tag="h1" size="xl">{title}</Heading>
      <div className={cx('image-wrapper')}>
        <GatsbyImage className={cx('image')} fluid={image.localFile.childImageSharp.fluid} />
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.shape({
    localFile: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.shape({
          src: PropTypes.string.isRequired,
          srcSet: PropTypes.string.isRequired,
          sizes: PropTypes.string.isRequired,
          aspectRatio: PropTypes.number.isRequired,
        }),
      }),
    }),
  }).isRequired,
};

export default Hero;
