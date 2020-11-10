import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Item from './item';
import styles from './options.module.scss';

const cx = classNames.bind(styles);

const Options = ({ items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item number={index + 1} key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

Options.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      footerText: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      imageName: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

Options.defaultProps = {

};

export default Options;
