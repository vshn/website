import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState, useMemo } from 'react';

import Select from 'components/pages/clients/partners-list/select';
import Link from 'components/shared/link';
import t from 'i18n';

import styles from './partners-list.module.scss';

const cx = classNames.bind(styles);

const getFlattenTaxonomies = (taxonomies) => taxonomies.nodes.map((taxonomy) => taxonomy.slug);

const PartnersList = ({ filters, partners, locale }) => {
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

    return filteredPartners.map(({
      uri: url,
      title,
      content,
      acf: { partnerInfo: { partnerLink } },
    }, index) => (
      <li className={cx('partner')} key={index}>
        {content
          ? <Link className={cx('partner-link')} to={url}>{title}</Link>
          : <Link className={cx('partner-link')} to={partnerLink.url} target={partnerLink.target}>{title}</Link>}
      </li>
    ));
  }, [activeFilters, partners]);

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('filters-wrapper')}>
          {Object.entries(filters).map(([filterKey, filterOptions], index) => (
            <Select
              label={t[locale].partners.filters[filterKey]}
              filterKey={filterKey}
              options={filterOptions}
              key={index}
              filterSelectHandler={filterSelectHandler}
            />
          ))}
        </div>
        <ul className={cx('partners-wrapper')}>
          {memoizedPartners.length
            ? memoizedPartners
            : (
              <p className={cx('no-matches')}>
                <span className={cx('icon')} />
                No matches found
              </p>
            )}
        </ul>
      </div>
    </section>
  );
};

PartnersList.propTypes = {
  locale: PropTypes.oneOf(['de', 'en']).isRequired,
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

export default PartnersList;
