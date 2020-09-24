import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './author.module.scss';

const cx = classNames.bind(styles);

const Author = ({ name, email, phone, description }) => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/blog-post/author/markus-speth.png" }) {
        childImageSharp {
          fluid(maxWidth: 120) {
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
            <ul className={cx('info')}>
              <li>
                <Link className={cx('link')} to={email}>{email}</Link>
              </li>
              <span className={cx('circle')} />
              <li>
                <Link className={cx('link')} to={phone}>{phone}</Link>
              </li>
            </ul>
            <p className={cx('description')}>{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
Author.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.number,
  description: PropTypes.string.isRequired,
};

Author.defaultProps = {
  phone: '+41 44 545 53 00',
};

export default Author;
