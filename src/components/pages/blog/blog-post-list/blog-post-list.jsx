import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames/bind';

import GatsbyImage from 'gatsby-image';

import styles from './blog-post-list.module.scss';
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
        <div className={cx('items-wrapper')}>
          {items.map((item, index) => <Item {...item} key={index} />)}
        </div>
        <div className={cx('illustration')} aria-hidden>
          <span className={cx('rectangle', 'rectangle-1')} />
          <span className={cx('rectangle', 'rectangle-2')} />
          <span className={cx('rectangle', 'rectangle-3')} />
          <GatsbyImage className={cx('image')} fluid={image} />
        </div>
      </div>
    </section>
  );
};

BlogPostList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonUrl: PropTypes.string.isRequired,
      date: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,
};

export default BlogPostList;
