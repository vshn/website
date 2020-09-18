import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Link from 'components/shared/link';

import styles from './categories.module.scss';

const cx = classNames.bind(styles);

const Categories = ({ activeCategoryId }) => (
  <div className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <div className={cx('items-wrapper')}>
        <Link className={cx('item', { active: !activeCategoryId })} to="/">
          All posts
        </Link>
      </div>
    </div>
  </div>
);

Categories.propTypes = {
  activeCategoryId: PropTypes.string,
};

Categories.defaultProps = {
  activeCategoryId: null,
};

export default Categories;
