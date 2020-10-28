import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './partners-list.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, filters, partners }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <div className={cx('header')}>
        <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
        <div>
          {filters.map(({ label }, index) => (
            <select className={cx('filter')} key={index}>
              <option value={label}>{label}</option>
            </select>
          ))}
        </div>
      </div>
      <ul className={cx('partners-wrapper')}>
        {partners.map(({ url, name }, index) => (
          <li className={cx('partner')} key={index}>
            <Link className={cx('partner-link')} to={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Content;
