import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = (
  { post: { uri: url, categories, title, acf: { shortDescription } }, itemFooterText },
) => (
  <article className={cx('wrapper')}>
    <div className={cx('inner')}>
      <ul className={cx('categories-wrapper')}>
        {categories.nodes.map(({ name }, index) => (
          <li className={cx('category')} key={index}>{name}</li>
        ))}
      </ul>
      <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
      <p className={cx('short-description')}>{shortDescription}</p>
      <Button className={cx('read-more')} size="xs" to={url}>{itemFooterText}</Button>
    </div>
  </article>
);

Item.propTypes = {
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
  itemFooterText: PropTypes.string.isRequired,
};

export default Item;
