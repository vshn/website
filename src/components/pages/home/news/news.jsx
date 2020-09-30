import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import BlogPostsCarousel from 'components/shared/blog-posts-carousel';

import shape from './images/shape.svg';
import styles from './news.module.scss';

const cx = classNames.bind(styles);

const News = ({ title, items }) => {
  const shapeElement = <img className={cx('shape')} src={shape} alt="" aria-hidden />;
  return <BlogPostsCarousel className={cx('wrapper')} title={title} items={items} shape={shapeElement} />;
};

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
