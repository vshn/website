import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './contact-info.module.scss';
import Item from './item';

const cx = classNames.bind(styles);

const ContactInfo = ({ items }) => (
  <div className={cx('wrapper')}>
    {items.map((item, index) => (
      <Item {...item} key={index} />
    ))}
  </div>
);

ContactInfo.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ContactInfo;
