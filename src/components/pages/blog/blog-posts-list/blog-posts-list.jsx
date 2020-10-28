import classNames from 'classnames/bind';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './blog-posts-list.module.scss';
import shape from './images/shape.svg';
import Item from './item';

const cx = classNames.bind(styles);

const BlogPostList = ({ items, itemFooterText, image }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <div className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item
            {...item}
            itemFooterText={itemFooterText}
            key={index}
          />
        ))}
      </div>

      <div className={cx('illustration')} aria-hidden>
        <span className={cx('rectangle', 'rectangle-1')} />
        <span className={cx('rectangle', 'rectangle-2')} />
        <span className={cx('rectangle', 'rectangle-3')} />
        <GatsbyImage className={cx('image')} fluid={image.localFile.childImageSharp.fluid} />
      </div>

      <img className={cx('shape')} src={shape} alt="" aria-hidden />
    </div>
  </div>
);
BlogPostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        shortDescription: PropTypes.string.isRequired,
      }).isRequired,
      date: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  itemFooterText: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default BlogPostList;
