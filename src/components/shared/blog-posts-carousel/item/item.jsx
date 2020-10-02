import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ categories, title, text, url }) => (
  <article className={cx('wrapper')}>
    <Link className={cx('inner')} to={url}>
      <ul className={cx('categories-wrapper')}>
        {categories.map((category, index) => (
          <li className={cx('category')} key={index}>{category}</li>
        ))}
      </ul>
      <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
      <p className={cx('text')}>{text}</p>
      <span className={cx('read-more')}>Read more</span>
    </Link>
  </article>
);

Item.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
