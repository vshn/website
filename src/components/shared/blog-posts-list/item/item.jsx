import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ tags, title, text, url, isVisible }) => (
  <article className={cx('wrapper', { withBoxShadow: isVisible })}>
    <Link className={cx('inner')} to={url}>
      <ul className={cx('tags-wrapper')}>
        {tags.map((tag, index) => (
          <li className={cx('tag')} key={index}>{tag}</li>
        ))}
      </ul>
      <Heading className={cx('title')} tag="h2" size="lg">{title}</Heading>
      <p className={cx('text')}>{text}</p>
      <span className={cx('read-more')}>Read more</span>
    </Link>
  </article>
);

Item.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
};

Item.defaultProps = {
  isVisible: true,
};

export default Item;
