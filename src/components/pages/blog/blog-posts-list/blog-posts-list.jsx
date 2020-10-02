import classNames from 'classnames/bind';
import { graphql, useStaticQuery } from 'gatsby';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './blog-posts-list.module.scss';
import shape from './images/shape.svg';
import Item from './item';

const cx = classNames.bind(styles);

const BlogPostList = ({ items }) => {
  const {
    image: {
      childImageSharp: { fluid: image },
    },
  } = useStaticQuery(graphql`
    {
      image: file(relativePath: { eq: "pages/blog/blog-post-list/image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <div className={cx('wrapper')}>
      <div className="container">
        <div className={cx('items-wrapper')}>
          {items.map((item, index) => <Item {...item} key={index} />)}
        </div>

        <div className={cx('illustration')} aria-hidden>
          <span className={cx('rectangle', 'rectangle-1')} />
          <span className={cx('rectangle', 'rectangle-2')} />
          <span className={cx('rectangle', 'rectangle-3')} />
          <GatsbyImage className={cx('image')} fluid={image} />
        </div>

        <img className={cx('shape')} src={shape} alt="" aria-hidden />
      </div>
    </div>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default BlogPostList;
