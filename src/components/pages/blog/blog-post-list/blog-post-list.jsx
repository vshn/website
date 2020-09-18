import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './blog-post-list.module.scss';
import Item from './item/item';
import Pagination from '../pagination';

const cx = classNames.bind(styles);

const BlogPostList = ({ items }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('items-wrapper')}>
        {items.map((item, index) => <Item {...item} key={index} />)}
        <Pagination />
      </div>
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
    }),
  ).isRequired,
};

export default BlogPostList;
