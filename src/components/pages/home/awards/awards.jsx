import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';

import ItemIcon1 from './images/item-icon-1.inline.svg';
import ItemIcon2 from './images/item-icon-2.inline.svg';
import ItemIcon3 from './images/item-icon-3.inline.svg';

import styles from './awards.module.scss';

const cx = classNames.bind(styles);

const itemIcons = [
  <ItemIcon1 className={cx('item-icon')} aria-hidden />,
  <ItemIcon2 className={cx('item-icon')} aria-hidden />,
  <ItemIcon3 className={cx('item-icon')} aria-hidden />,
];

const Awards = ({ title, description, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
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
        {
          items.map(({ title, description, url }, index) => (
            <li className={cx('item')} key={index}>
              <a className={cx('item-inner')} href={url}>
                {itemIcons[index]}
                <Heading className={cx('item-title')} tag="h3" size="lg" color="tertiary">{title}</Heading>
                <p className={cx('item-description')}>{description}</p>
                <span className={cx('item-read-more')}>Read more</span>
              </a>
            </li>
          ))
        }
      </ul>
    </div>
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
