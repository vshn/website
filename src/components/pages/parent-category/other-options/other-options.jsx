import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './other-options.module.scss';

const cx = classNames.bind(styles);

const OtherOptions = ({ title, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')} tag="h2">{title}</Heading>
      <div className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Link to={item.link.url} className={cx('item')} target={item.link.target} key={index}>{item.link.title}</Link>
        ))}
      </div>
    </div>
  </section>
);

OtherOptions.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      target: PropTypes.string.isRequired,
    }),
  })).isRequired,
};

OtherOptions.defaultProps = {

};

export default OtherOptions;
