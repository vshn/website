import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import shape from './images/shape.svg';
import styles from './report.module.scss';

const cx = classNames.bind(styles);

const Report = ({ title, subtitle, text, buttonText, buttonLink: { url: buttonUrl } }) => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/home/report/image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 410) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h2" size="sm" color="secondary">{title}</Heading>
          <Heading className={cx('subtitle')} tag="p" size="xl" innerHTML={subtitle} />
          <p className={cx('text')}>{text}</p>
          <Button to={buttonUrl}>{buttonText}</Button>
        </div>

        <div className={cx('illustration')} aria-hidden>
          <span className={cx('rectangle', 'rectangle-1')} />
          <span className={cx('rectangle', 'rectangle-2')} />
          <span className={cx('rectangle', 'rectangle-3')} />
          <GatsbyImage className={cx('image')} fluid={image} />
        </div>

        <img className={cx('shape')} src={shape} alt="" aria-hidden />
      </div>
    </section>
  );
};

Report.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default Report;
