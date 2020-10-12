import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import cup from './images/cup.svg';

import styles from './content.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, filters, items }) => (
  <div className={cx('wrapper')}>
    <div className="container">
      <div className={cx('title-wrapper')}>
        <Heading className={cx('title')} tag="h2" size="xl" color="primary" innerHTML={title} />
        <div className={cx('filters')}>
          {filters.map((filter, index) => (
            <select className={cx('filter')} key={index}>
              <option value={filter.name}>{filter.name}</option>
            </select>
          ))}
        </div>
      </div>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <li className={cx('item')} key={index}>
            <Link className={cx('link')} to={item.url}>{item.name}</Link>
            {item.type === 'featured' && (
              <Link className={cx('icon-wrapper', 'cup')} title={item.info} to={item.storyUrl}><img src={cup} alt="" aria-hidden /></Link>
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
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string,
      storyUrl: PropTypes.string,
      info: PropTypes.string,
    }),
  ).isRequired,
};

export default Content;
