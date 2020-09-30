import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { motion } from 'framer-motion';

import styles from './item.module.scss';

const cx = classNames.bind(styles);
const rectanglesAnimationVariants = {
  initial: {
    opacity: 0,
    y: 85,
  },
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.21, 0.49, 0.33, 1],
    },
  },
};

const Item = ({ name, logo }) => (
  <motion.li
    variants={rectanglesAnimationVariants}
    className={cx('wrapper', `wrapper_${name.toLocaleLowerCase()}`)}
  >
    <span className={cx('name')}>{name}</span>
    <div className={cx('logo-wrapper')}>
      <img className={cx('logo')} src={logo} alt={`${name} logo`} />
    </div>
  </motion.li>
);

Item.propTypes = {};

Item.defaultProps = {};

export default Item;
