import classNames from 'classnames/bind';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const ANIMATION_DURATION = 0.2;

const variantsAnimation = {
  hidden: { opacity: 0, height: 0 },
  visible: { opacity: 1, height: 'auto' },
};

const Item = ({ label, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={cx('wrapper')}>
      <button className={cx('filter', { 'filter-open': isOpen })} type="button" aria-label="Filter" onClick={handleFilterClick}>
        <span className={cx('label')}>{label}</span>
        <div className={cx('arrow')}>
          <span className={cx('left')} />
          <span className={cx('right')} />
        </div>
      </button>
      {isOpen && (
      <motion.div
        className={cx('items-wrapper')}
        initial="hidden"
        animate={isOpen ? 'visible' : 'hidden'}
        variants={variantsAnimation}
        transition={{ duration: ANIMATION_DURATION }}
      >
        {items.map(({ item }, index) => (
          <button className={cx('item')} type="button" value={item} key={index}>{item}</button>
        ))}
      </motion.div>
      )}
    </div>
  );
};

Item.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    item: PropTypes.string.isRequired,
  })).isRequired,
};

export default Item;
