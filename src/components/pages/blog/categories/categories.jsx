import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';

import styles from './categories.module.scss';

const cx = classNames.bind(styles);

const Categories = ({ activeItemSlug, items }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('items-wrapper')}>
        {items.map(({ name, slug }, index) => (
          <Link className={cx('item', { active: activeItemSlug === slug })} to={slug} key={index}>
            {name}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

Categories.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
  activeItemSlug: PropTypes.string.isRequired,
};

export default Categories;
