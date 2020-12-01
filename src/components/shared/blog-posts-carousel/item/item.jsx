import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = (
  { uri: url, categories, title, shortDescription, readMoreText },
) => (
  <article className={cx('wrapper')}>
    <div className={cx('inner')}>
      <ul className={cx('categories-wrapper')}>
        {categories.nodes.map(({ name }, index) => (
          <li className={cx('category')} key={index}>{name}</li>
        ))}
      </ul>
      <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
      <p className={cx('short-description')} dangerouslySetInnerHTML={{ __html: shortDescription }} />
      <Button className={cx('read-more')} size="xs" to={url}>{readMoreText}</Button>
    </div>
  </article>
);

Item.propTypes = {
  uri: PropTypes.string.isRequired,
  categories: PropTypes.shape({
    nodes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  }).isRequired,
  title: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  readMoreText: PropTypes.string.isRequired,
};

export default Item;
