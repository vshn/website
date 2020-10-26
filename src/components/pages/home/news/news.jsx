import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostsCarousel from 'components/shared/blog-posts-carousel';

import styles from './news.module.scss';

const cx = classNames.bind(styles);

const News = ({ title, items }) => <BlogPostsCarousel className={cx('wrapper')} title={title} items={items} />;

News.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })).isRequired,
};

export default News;
