import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect, useRef, useState } from 'react';

import styles from './select.module.scss';

const cx = classNames.bind(styles);

const Select = ({ label, options, filterSelectHandler, filterKey }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef();
  const handleItemSelect = (newSelection) => {
    setSelectedItem(newSelection);
    filterSelectHandler(filterKey, newSelection);
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
        {selectedItem && (
          <button className={cx('item')} type="button" onClick={() => handleItemSelect(null)}>None</button>
        )}
        {options.map(({ name, slug }, index) => {
          if (slug === selectedItem) return null;
          return (
            <button className={cx('item')} type="button" value={slug} key={index} onClick={() => handleItemSelect(slug)}>{name}</button>
          );
        })}
      </div>
      )}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  filterKey: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
  filterSelectHandler: PropTypes.func.isRequired,
};

export default Select;
