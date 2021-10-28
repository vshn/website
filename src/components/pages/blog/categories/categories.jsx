import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import translations from 'i18n';

import styles from './categories.module.scss';

const cx = classNames.bind(styles);

const Categories = ({ locale, rootPath, categories, activeCategoryId }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    navigate(href, {
      state: { preventScroll: true },
    });
  };
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('items-wrapper')}>
          <a className={cx('item', { active: !activeCategoryId })} href={rootPath} onClick={(event) => { handleClick(event); }}>
            {translations[locale].blog.allPostsCategoryName}
          </a>
          {categories.map(({ name, slug, id }) => (
            <a
              className={cx('item', { active: activeCategoryId === id })}
              href={`${rootPath}${slug}/`}
              key={id}
              onClick={(event) => { handleClick(event); }}
            >
              {name}
            </a>
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
