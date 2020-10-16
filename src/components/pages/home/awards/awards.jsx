import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Item from './item';

import itemImage1 from './images/item-image-1.svg';
import itemImage2 from './images/item-image-2.svg';
import itemImage3 from './images/item-image-3.svg';

import stripes from './images/stripes.svg';

import styles from './awards.module.scss';

const cx = classNames.bind(styles);

const itemImages = [
  itemImage1,
  itemImage2,
  itemImage3,
];

const Awards = ({ title, subtitle, items }) => (
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
        {items.map((item, index) => <Item image={itemImages[index]} {...item} key={index} />)}
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
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.shape({
        url: PropTypes.string.isRequired,
      }).isRequired,
    }),
  ).isRequired,
};

export default Awards;
