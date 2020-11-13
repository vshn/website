import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Select from 'components/pages/partners/partners-list/select';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './partners-list.module.scss';

const cx = classNames.bind(styles);

const getFlattenTaxonomies = (taxonomies) => taxonomies.nodes.map((taxonomy) => taxonomy.slug);

const Content = ({ title, filters, partners }) => {
  const [activeFilters, setActiveFilters] = useState(
    () => Object.fromEntries(Object.keys(filters).map((filterKey) => [filterKey, null])),
  );

  const filterSelectHandler = (filterKey, filterValue) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: filterValue,
    }));
  };

  const memoizedPartners = useMemo(() => {
    const filteredPartners = partners.filter(({ industries, infrastructures, technologies }) => {
      const flattenIndustries = getFlattenTaxonomies(industries);
      const flattenInfrastructures = getFlattenTaxonomies(infrastructures);
      const flattenTechnologies = getFlattenTaxonomies(technologies);

      const shouldBeShown = Object
        .entries({
          industries: flattenIndustries,
          infrastructures: flattenInfrastructures,
          technologies: flattenTechnologies,
        })
        .map(([key, value]) => activeFilters[key] === null
         || value.includes(activeFilters[key]))
        .every((res) => res);
      return shouldBeShown;
    });

    return filteredPartners.map(({ uri: url, title }, index) => (
      <li className={cx('partner')} key={index}>
        <Link className={cx('partner-link')} to={url}>{title}</Link>
      </li>
    ));
  }, [activeFilters, partners]);

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('header')}>
          <Heading className={cx('title')} id="partners" tag="h2" size="xl" color="primary">{title}</Heading>
          <div className={cx('filters-wrapper')}>
            {Object.entries(filters).map(([filterKey, filterOptions], index) => (
              <Select
                label={filterKey}
                filterKey={filterKey}
                options={filterOptions}
                key={index}
                filterSelectHandler={filterSelectHandler}
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
  filters: PropTypes.shape({}).isRequired,
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
