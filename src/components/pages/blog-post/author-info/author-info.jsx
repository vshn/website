import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './author-info.module.scss';

const cx = classNames.bind(styles);

const AuthorInfo = ({ name, links, description }) => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/blog-post/author-info/markus-speth.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('items-wrapper')}>
          <GatsbyImage className={cx('image')} fluid={image} />
          <div className={cx('content')}>
            <Heading className={cx('name')} tag="h3" size="lg">{name}</Heading>
            <ul className={cx('links-wrapper')}>
              {links.map(({ label, path }, index) => (
                <li className={cx('link-wrapper')} key={index}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
            <p className={cx('description')}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

AuthorInfo.propTypes = {
  name: PropTypes.string.isRequired,
  links: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
  })).isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthorInfo;
