import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import styles from './cards.module.scss';

const cx = classNames.bind(styles);

const Cards = ({ items }) => (
  <section className={cx('wrapper')}>
    <ul className={cx('list')}>
      {items.map(({ title, text }, index) => {
        const number = index + 1;
        return (
          <li className={cx('item')} key={index}>
            <span className={cx('number')} aria-hidden>{number}</span>
            <Heading className={cx('title')} tag="h4">{title}</Heading>
            <p className={cx('text')}>{text}</p>
          </li>
        );
      })}
    </ul>
  </section>
);

Cards.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cards;
