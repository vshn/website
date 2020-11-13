import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Item from 'components/pages/partners/partners-list/item';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './partners-list.module.scss';

const cx = classNames.bind(styles);

const Content = ({ title, filters: rawFilters, partners }) => {
  const filters = rawFilters.filter(({ isEnabled }) => isEnabled);
  const [activeFilters, setActiveFilters] = useState(() => Object
    .fromEntries(filters.map(({ label }) => [label.toLowerCase(), null])));

  const filterSelectHandler = (filter) => (value) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filter]: value,
    }));
  };

  const memoizedPartners = useMemo(() => partners
    .map(({ uri: url, title, acf: { filters: partnerFilters } }, index) => {
      const shouldBeShown = Object
        .entries(partnerFilters)
        .map(([key, value]) => !Object.prototype.hasOwnProperty.call(activeFilters, key)
         || activeFilters[key] === null
         || activeFilters[key] === value)
        .every((res) => res);
      if (!shouldBeShown) return null;
      return (
        <li className={cx('partner')} key={index}>
          <Link className={cx('partner-link')} to={url}>{title}</Link>
        </li>
      );
    }), [activeFilters, partners]);

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('header')}>
          <Heading className={cx('title')} id="partners" tag="h2" size="xl" color="primary">{title}</Heading>
          <div className={cx('filters-wrapper')}>
            {filters.map((filter, index) => (
              <Item
                {...filter}
                key={index}
                filterSelectHandler={filterSelectHandler(filter.label.toLowerCase())}
              />
            ))}
          </div>
        </div>
        <ul className={cx('partners-wrapper')}>
          {memoizedPartners}
        </ul>
      </div>
    </section>
  );
};

Content.propTypes = {
  title: PropTypes.string.isRequired,
  filters: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(PropTypes.shape({
        item: PropTypes.string.isRequired,
      })).isRequired,
      isEnabled: PropTypes.oneOf([null, true, false]),
    }),
  ).isRequired,
  partners: PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        filters: PropTypes.shape({}),
      }),
    }),
  ).isRequired,
};

export default Content;
