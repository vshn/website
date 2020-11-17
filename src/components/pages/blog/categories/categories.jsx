import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import translations from 'i18n';

import styles from './categories.module.scss';

const cx = classNames.bind(styles);

const Categories = ({ locale, rootPath, categories, activeCategoryId }) => {
  console.log(categories);
  console.log(activeCategoryId);
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('items-wrapper')}>
          <Link className={cx('item', { active: !activeCategoryId })} to={rootPath}>
            {translations[locale].blog.allPostsCategoryName}
          </Link>
          {categories.map(({ name, slug, id }) => (
            <Link className={cx('item', { active: activeCategoryId === id })} to={`${rootPath}${slug}`} key={id}>
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
  activeCategoryId: PropTypes.string,
  rootPath: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

Categories.defaultProps = {
  activeCategoryId: null,
};

export default Categories;
