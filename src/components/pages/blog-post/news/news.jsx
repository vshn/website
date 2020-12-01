import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostsCarousel from 'components/shared/blog-posts-carousel';

import styles from './news.module.scss';

const cx = classNames.bind(styles);

const News = ({ title, items, readMoreText }) => (
  <BlogPostsCarousel className={cx('wrapper')} title={title} items={items} readMoreText={readMoreText} />
);

News.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    uri: PropTypes.string.isRequired,
    categories: PropTypes.shape({
      nodes: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
      })),
    }).isRequired,
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      shortDescription: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  readMoreText: PropTypes.string.isRequired,
};

export default News;
