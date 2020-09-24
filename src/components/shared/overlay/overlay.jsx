import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './overlay.module.scss';

const cx = classNames.bind(styles);

const Overlay = ({ isVisible, onClick }) => (
  <div className={cx('wrapper', { visible: isVisible })} onKeyPress={onClick} onClick={onClick} />
);

Overlay.propTypes = {
  isVisible: PropTypes.bool,
  onClick: PropTypes.func,
};

Overlay.defaultProps = {
  isVisible: false,
  onClick: null,
};

export default Overlay;
