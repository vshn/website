import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ post: { uri, categories, title, acf: { text, footerText } } }) => (
  <article className={cx('wrapper')}>
    <Link className={cx('inner')} to={uri}>
      <ul className={cx('categories-wrapper')}>
        {categories.nodes.map(({ name }, index) => (
          <li className={cx('category')} key={index}>{name}</li>
        ))}
      </ul>
      <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
      <p className={cx('text')}>{text}</p>
      <span className={cx('read-more')}>{footerText}</span>
    </Link>
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
      text: PropTypes.string.isRequired,
      footerText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
