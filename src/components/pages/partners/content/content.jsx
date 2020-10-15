import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Cup from 'icons/cup.inline.svg';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, filters, items }) => (
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
      <ul className={cx('items-wrapper')}>
        {items.map(({ url, name, type, successStoryLabel, successStoryUrl }, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('item-link')} to={url}>{name}</Link>
            {type === 'isFeatured' && (
              <Link className={cx('icon-wrapper')} title={successStoryLabel} to={successStoryUrl}><Cup /></Link>
            )}
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
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      successStoryLabel: PropTypes.string,
      successStoryUrl: PropTypes.string,
    }),
  ).isRequired,
};

export default Content;
