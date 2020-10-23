import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Item from './item';

import ItemImage1 from './images/item-image-1.inline.svg';
import ItemImage2 from './images/item-image-2.inline.svg';
import ItemImage3 from './images/item-image-3.inline.svg';

import styles from './advantages.module.scss';

const cx = classNames.bind(styles);

const itemImages = [
  ItemImage1,
  ItemImage2,
  ItemImage3,
];

const Advantages = ({ title, description, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="xs" color="secondary">{title}</Heading>
      <Heading className={cx('description')} tag="p" size="xl" innerHTML={description} />

      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item number={index + 1} image={itemImages[index]} key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

Advantages.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Advantages;
