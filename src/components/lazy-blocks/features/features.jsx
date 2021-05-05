import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import CheckIcon from 'icons/check.inline.svg';

import styles from './features.module.scss';

const cx = classNames.bind(styles);

const Features = ({ items, columns }) => (
  <section className={cx('wrapper', `columns-${columns}`)}>
    <ul className={cx('list')}>
      {items.map(({ text }, index) => (
        <li className={cx('item')} key={index}>
          <span className={cx('icon')}><CheckIcon /></span>
          <div className={cx('text')} dangerouslySetInnerHTML={{ __html: text }} />
        </li>
      ))}
    </ul>
  </section>
);

Features.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
  })).isRequired,
  columns: PropTypes.oneOf(['2', '3']),
};

Features.defaultProps = {
  columns: '3',
};

export default Features;
