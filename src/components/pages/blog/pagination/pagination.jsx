import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import ReactPaginate from 'react-paginate';

import translations from 'i18n';

import Arrow from './images/arrow.inline.svg';
import styles from './pagination.module.scss';

const cx = classNames.bind(styles);

const Pagination = (
  { locale, pageCount, currentPageIndex, rootPath, currentCategory },
) => {
  const category = currentCategory ? `${currentCategory}/` : '';
  const handlePageChange = ({ selected }) => {
    const navigatePath = selected === 0
      ? `${rootPath}${category}`
      : `${rootPath}${category}${(selected + 1)}`;
    navigate(navigatePath);
  };

  const PrevLabel = () => (
    <span>
      <Arrow />
      <span>{translations[locale].blog.pagination.prevLabel}</span>
    </span>
  );
  const NextLabel = () => (
    <span>
      <span>{translations[locale].blog.pagination.nextLabel}</span>
      <Arrow />
    </span>
  );
  return (
    <div className={cx('wrapper')}>
      <div className="container">
        {pageCount ? (
          <ReactPaginate
            containerClassName={cx('items-wrapper')}
            pageClassName={cx('item')}
            breakClassName={cx('item')}
            activeClassName={cx('active')}
            previousClassName={cx('item', 'previous')}
            nextClassName={cx('item', 'next')}
            disabledClassName={cx('disabled')}
            pageCount={pageCount}
            pageRangeDisplayed={0}
            marginPagesDisplayed={0}
            forcePage={currentPageIndex}
            previousLabel={<PrevLabel />}
            nextLabel={<NextLabel />}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
};

Pagination.propTypes = {
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
  pageCount: PropTypes.number.isRequired,
  currentPageIndex: PropTypes.number.isRequired,
  rootPath: PropTypes.string.isRequired,
  currentCategory: PropTypes.string,
};

Pagination.defaultProps = {
  currentCategory: null,
};

export default Pagination;
