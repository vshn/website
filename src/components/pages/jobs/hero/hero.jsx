import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Breadcrumbs from 'components/shared/breadcrumbs';
import Heading from 'components/shared/heading';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title, breadcrumbs, photo }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      {breadcrumbs?.length > 0 && <Breadcrumbs currentPageTitle={title} crumbs={breadcrumbs} />}
      <Heading className={cx('title')} tag="h1" size="xl">{title}</Heading>
      <div className={cx('photo-wrapper')}>
        <GatsbyImage className={cx('photo')} fluid={photo.localFile.childImageSharp.fluid} />
      </div>
    </div>
  </section>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.shape({
  })),
  photo: PropTypes.shape({
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

Hero.defaultProps = {
  breadcrumbs: [],
};

export default Hero;
