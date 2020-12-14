import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './progress-circle.module.scss';

const cx = classNames.bind(styles);

const SIZE = 58;
const STROKE_WIDTH = 5;
const ITEM_CHANGE_INTERVAL = 5000;

const ProgressCircle = ({ className, animate, children }) => {
  const center = SIZE / 2;
  const radius = SIZE / 2 - STROKE_WIDTH / 2;
  const circumference = 2 * Math.PI * radius;

  const circleVariants = {
    initial: {
      strokeDashoffset: circumference,
      transition: { duration: 0, ease: [1, 1, 1, 1] },
    },
    animate: {
      strokeDashoffset: 0,
      transition: { duration: ITEM_CHANGE_INTERVAL / 1000, ease: [1, 1, 1, 1] },
    },
  };

  return (
    <div className={cx('wrapper', className, { animate })}>
      <svg className={cx('circle')} viewBox={`0 0 ${SIZE} ${SIZE}`}>
        <motion.circle
          fillOpacity="0"
          strokeWidth={STROKE_WIDTH}
          strokeDashoffset={circumference}
          strokeDasharray={circumference}
          cx={center}
          cy={center}
          r={radius}
          variants={circleVariants}
          initial="initial"
          animate={animate ? 'animate' : 'initial'}
        />
      </svg>
      <div className={cx('inner')}>{children}</div>
    </div>
  );
};

ProgressCircle.propTypes = {
  className: PropTypes.string.isRequired,
  animate: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default ProgressCircle;
