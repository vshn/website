import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './breadcrumbs.module.scss';

const cx = classNames.bind(styles);

const Breadcrumbs = ({ currentPageTitle, crumbs }) => (
  <div className={cx('breadcrumbs')}>
    {crumbs.map((crumb, index) => <Link key={index} className={cx('link')} to={crumb.link.url}>{crumb.link.title}</Link>)}
    <span>{currentPageTitle}</span>
  </div>
);

Breadcrumbs.defaultProps = {
  crumbs: [],
};

Breadcrumbs.propTypes = {
  currentPageTitle: PropTypes.string.isRequired,
  crumbs: PropTypes.arrayOf(PropTypes.shape({
    link: PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired),
};

export default Breadcrumbs;
