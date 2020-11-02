import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ label, items }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();

  const handleItemClick = (newSelection) => {
    setSelectedItem(newSelection);
    setIsOpen(false);
  };
  const handleFilterClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClickOutside = (e) => {
    if (!menuRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);
  return (
    <div className={cx('wrapper')} ref={menuRef}>
      <button className={cx('filter', { 'filter-open': isOpen })} type="button" aria-label="Filter" onClick={handleFilterClick}>
        <span className={cx('label')}>{selectedItem || label}</span>
        <div className={cx('arrow')}>
          <span className={cx('left')} />
          <span className={cx('right')} />
        </div>
      </button>
      {isOpen && (
      <div className={cx('items-wrapper')}>
        {items.map(({ item }, index) => (
          <button className={cx('item')} type="button" value={item} key={index} onClick={() => handleItemClick(item)}>{item}</button>
        ))}
      </div>
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
