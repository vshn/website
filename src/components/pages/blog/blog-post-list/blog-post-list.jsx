import React from 'react';
import PropTypes from 'prop-types';
// import { graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames/bind';

// import GatsbyImage from 'gatsby-image';

import styles from './blog-post-list.module.scss';
import Item from './item';

const cx = classNames.bind(styles);

const BlogPostList = ({ items }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('items-wrapper')}>
        {items.map((item, index) => <Item {...item} key={index} />)}
      </div>
      {/* <GatsbyImage className={cx('image')} fluid={image} /> */}
    </div>
  </section>
);

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
