import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import BlogPostsCarousel from 'components/shared/blog-posts-carousel';

import shape from './images/shape.svg';
import styles from './news.module.scss';

const cx = classNames.bind(styles);

const News = ({ title, items, itemFooterText }) => {
  const shapeElement = <img className={cx('shape')} src={shape} alt="" aria-hidden />;
  return <BlogPostsCarousel className={cx('wrapper')} title={title} items={items} shape={shapeElement} itemFooterText={itemFooterText} />;
};

News.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    post: PropTypes.shape({
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
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default News;
