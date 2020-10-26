import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import { ITEM_CHANGE_INTERVAL } from '..';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ name, number, isActive, isAnimationStarted, onClick }) => (
  <div
    className={cx('wrapper', { active: isActive, animationStarted: isAnimationStarted })}
    role="button"
    tabIndex="0"
    onKeyPress={onClick}
    onClick={onClick}
  >
    <span className={cx('number')} aria-hidden>
      <span>{number}</span>
    </span>
    <h3 className={cx('name')}>{name}</h3>
    <span className={cx('progress-circle')} aria-hidden>
      <svg width="32" height="32">
        <circle
          r="14.5"
          cx="16"
          cy="16"
          strokeWidth="2.5px"
          fill="transparent"
          style={{ animationDuration: `${ITEM_CHANGE_INTERVAL}ms` }}
        />
      </svg>
    </span>
  </div>
);

Item.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  isAnimationStarted: PropTypes.bool,
  onClick: PropTypes.func,
};

Item.defaultProps = {
  isActive: false,
  isAnimationStarted: false,
  onClick: null,
};

export default Item;
