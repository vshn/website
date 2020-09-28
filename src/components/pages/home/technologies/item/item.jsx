import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ name, logo }) => (
  <li className={cx('wrapper', `wrapper_${name.toLocaleLowerCase()}`)}>
    <span className={cx('name')}>{name}</span>
    <div className={cx('logo-wrapper')}>
      <img className={cx('logo')} src={logo} alt={`${name} logo`} />
    </div>
  </li>
);

Item.propTypes = {

};

Item.defaultProps = {

};

export default Item;
