import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import logo from './images/partner-logo.svg';

import styles from './partner-info.module.scss';

const cx = classNames.bind(styles);

const PartnerInfo = ({ details, url }) => (
  <div className={cx('items-wrapper')}>
    <img className={cx('logo')} src={logo} alt="" aria-hidden />
    <ul>
      {details.map(({ value, text }, index) => (
        <li className={cx('item')} key={index}>
          <strong>{value}</strong>
          <span>{text}</span>
        </li>
      ))}
    </ul>
    <span>{url}</span>
  </div>
);

PartnerInfo.propTypes = {
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
};

PartnerInfo.defaultProps = {

};

export default PartnerInfo;
