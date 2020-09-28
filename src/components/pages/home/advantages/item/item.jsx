import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ title, description, url, number, image: Image }) => (
  <li className={cx('wrapper')}>
    <Link className={cx('inner')} to={url}>
      <Heading className={cx('number')} tag="span" size="lg" aria-hidden>{number}</Heading>
      <Image className={cx('image')} aria-hidden />
      <div className={cx('content')}>
        <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
        <p className={cx('description')}>{description}</p>
        <span className={cx('read-more')}>Read more</span>
      </div>
    </Link>
  </li>
);

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  image: PropTypes.func.isRequired,
};

export default Item;
