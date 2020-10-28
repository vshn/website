import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './awards.module.scss';
import ItemImage1 from './images/item-image-1.svg';
import ItemImage2 from './images/item-image-2.svg';
import ItemImage3 from './images/item-image-3.svg';
import stripes from './images/stripes.svg';
import Item from './item';

const cx = classNames.bind(styles);

const itemImages = {
  itemImage1: ItemImage1,
  itemImage2: ItemImage2,
  itemImage3: ItemImage3,
};

const Awards = ({ title, subtitle, items, itemFooterText }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="sm" color="quaternary">{title}</Heading>
      <Heading
        className={cx('subtitle')}
        tag="p"
        size="xl"
        color="tertiary"
        highlightedWordsColor="secondary"
        innerHTML={subtitle}
      />

      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item
            itemFooterText={itemFooterText}
            itemImages={itemImages}
            {...item}
            key={index}
          />
        ))}
      </ul>
    </div>

    <img className={cx('stripes')} src={stripes} alt="" aria-hidden />
  </section>
);
Awards.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      imageName: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default Awards;
