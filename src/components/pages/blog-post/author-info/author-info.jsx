import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './author-info.module.scss';

const cx = classNames.bind(styles);

const AuthorInfo = ({ name, email, phone, description }) => {
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
        <div className={cx('inner')}>
          <GatsbyImage className={cx('image')} fluid={image} />
          <div className={cx('content')}>
            <Heading className={cx('name')} tag="h3" size="lg">{name}</Heading>
            <ul className={cx('list')}>
              <li className={cx('list-item')}>
                <Link className={cx('list-link')} to={email}>{email}</Link>
              </li>
              <li className={cx('list-item')}>
                <Link className={cx('list-link')} to={phone}>{phone}</Link>
              </li>
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
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AuthorInfo;
