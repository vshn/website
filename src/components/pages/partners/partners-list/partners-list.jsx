import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Item from 'components/pages/partners/partners-list/item';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './partners-list.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, filters, partners }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <div className={cx('header')}>
        <Heading className={cx('title')} id={title.toLowerCase()} tag="h2" size="xl" color="primary">{title}</Heading>
        <div className={cx('filters-wrapper')}>
          {filters.map((filter, index) => (
            <Item {...filter} key={index} />
          ))}
        </div>
      </div>
      <ul className={cx('partners-wrapper')}>
        {partners.map(({ uri: url, title }, index) => (
          <li className={cx('partner')} key={index}>
            <Link className={cx('partner-link')} to={url}>{title}</Link>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

Content.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
      })).isRequired,
    }),
  ).isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Content;
