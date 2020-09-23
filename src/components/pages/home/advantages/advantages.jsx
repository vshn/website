import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import ItemIcon1 from './images/item-icon-1.inline.svg';
import ItemIcon2 from './images/item-icon-2.inline.svg';
import ItemIcon3 from './images/item-icon-3.inline.svg';

import styles from './advantages.module.scss';

const cx = classNames.bind(styles);

const itemIcons = [
  <ItemIcon1 className={cx('item-icon')} aria-hidden />,
  <ItemIcon2 className={cx('item-icon')} aria-hidden />,
  <ItemIcon3 className={cx('item-icon')} aria-hidden />,
];

const Advantages = ({ title, description, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2" size="sm" color="secondary">{title}</Heading>
      <Heading className={cx('description')} tag="p" size="xl" innerHTML={description} />

      <ul className={cx('items-wrapper')}>
        {
          items.map(({ title, description, url }, index) => (
            <li className={cx('item')} key={index}>
              <Link className={cx('item-inner')} to={url}>
                <Heading className={cx('item-number')} tag="span" size="lg" aria-hidden>{index + 1}</Heading>
                {itemIcons[index]}
                <Heading className={cx('item-title')} tag="h3" size="lg">{title}</Heading>
                <p className={cx('item-description')}>{description}</p>
                <span className={cx('item-read-more')}>Read more</span>
              </Link>
            </li>
          ))
        }
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
