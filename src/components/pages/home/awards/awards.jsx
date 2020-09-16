import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Item from './item';

import ItemIcon1 from './images/item-icon-1.inline.svg';
import ItemIcon2 from './images/item-icon-2.inline.svg';
import ItemIcon3 from './images/item-icon-3.inline.svg';

import stripes from './images/stripes.svg';

import styles from './awards.module.scss';

const cx = classNames.bind(styles);

const itemIcons = [
  ItemIcon1,
  ItemIcon2,
  ItemIcon3,
];

const Awards = ({ title, description, items }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="sm" color="quaternary">{title}</Heading>
      <Heading
        className={cx('description')}
        tag="p"
        size="xl"
        color="tertiary"
        highlightedWordsColor="secondary"
        innerHTML={description}
      />

      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => <Item icon={itemIcons[index]} {...item} key={index} />)}
      </ul>
    </div>

    <img className={cx('stripes')} src={stripes} alt="" aria-hidden />
  </section>
);

Awards.propTypes = {
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

export default Awards;
