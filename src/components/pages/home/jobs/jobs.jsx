import classNames from 'classnames/bind';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './jobs.module.scss';

const cx = classNames.bind(styles);

const Jobs = ({ title, description, buttonText, buttonLink: { url: buttonUrl } }) => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/home/jobs/image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" highlightedWordsColor="secondary" innerHTML={title} />
        <p className={cx('description')}>{description}</p>
        <Button to={buttonUrl}>{buttonText}</Button>

        <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-4')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-5')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-6')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-7')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-8')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-9')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-10')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-11')} aria-hidden />
      </div>
      <GatsbyImage className={cx('background-image')} fluid={image} />
    </section>
  );
};

Jobs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jobs;
