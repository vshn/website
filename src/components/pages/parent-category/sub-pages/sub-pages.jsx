import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Item from './item';
import styles from './sub-pages.module.scss';

const cx = classNames.bind(styles);

const SubPages = ({ items, itemFooterText }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item number={index + 1} footerText={itemFooterText} key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

SubPages.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  itemFooterText: PropTypes.string.isRequired,
};

export default SubPages;
