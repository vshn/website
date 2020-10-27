import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './categories.module.scss';

const cx = classNames.bind(styles);

const Categories = ({ items, activeItemSlug }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('items-wrapper')}>
        {items.map(({ category: { name, uri: slug } }, index) => (
          <Link className={cx('item', { active: activeItemSlug === slug })} to={slug} key={index}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    category: PropTypes.shape({
      name: PropTypes.string.isRequired,
      uri: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  activeItemSlug: PropTypes.string.isRequired,
};

export default Categories;
