import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './overlay.module.scss';

const cx = classNames.bind(styles);

const Overlay = ({ isVisible, onClick }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
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
