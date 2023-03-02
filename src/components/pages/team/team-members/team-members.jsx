import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useMemo, useState } from 'react';

import Select from 'components/shared/select';
import t from 'i18n';
import Email from 'icons/email.inline.svg';
import Github from 'icons/github.inline.svg';
import SSHKey from 'icons/key.inline.svg';
import LinkedIn from 'icons/linkedin.inline.svg';
import Key from 'icons/lock.inline.svg';
import Personal from 'icons/personal.inline.svg';
import Twitter from 'icons/twitter.inline.svg';
import Xing from 'icons/xing.inline.svg';
import Mastodon from 'icons/mastodon.inline.svg';

import Item from './item';
import styles from './team-members.module.scss';

const cx = classNames.bind(styles);

const SOCIAL_ICONS = {
  email: Email,
  key: Key,
  sshKey: SSHKey,
  twitter: Twitter,
  linkedin: LinkedIn,
  xing: Xing,
  github: Github,
  personal: Personal,
  mastodon: Mastodon,
};
const TeamMembers = ({ filters, items, locale }) => {
  const [activeFilters, setActiveFilters] = useState(
    () => Object.fromEntries(Object.keys(filters).map((filterKey) => [filterKey, null])),
  );
  const filterSelectHandler = (filterKey, filterValue) => {
    setActiveFilters((prev) => ({
      ...prev,
      [filterKey]: filterValue,
    }));
  };

  const memoizedTeamMembers = useMemo(() => {
    const filteredTeamMembers = items
      .filter(({ teams: { nodes: teams }, acf: { jobTitle: roles } }) => {
        const shouldBeShown = Object
          .entries({
            teams: teams.map(({ name }) => name),
            roles,
          })
          .every(([key, value]) => activeFilters[key] === null
         || value.includes(activeFilters[key]));
        return shouldBeShown;
      });

    return filteredTeamMembers
      .map((item, index) => (<Item icons={SOCIAL_ICONS} key={index} {...item} />));
  }, [activeFilters, items]);
  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('filters-wrapper')}>
          {Object.entries(filters).map(([filterKey, filterOptions], index) => (
            <Select
              label={t[locale].team.filters[filterKey]}
              filterKey={filterKey}
              options={filterOptions}
              key={index}
              filterSelectHandler={filterSelectHandler}
            />
          ))}
        </div>
        <div className={cx('list')}>
          {memoizedTeamMembers.length
            ? memoizedTeamMembers
            : (
              <p className={cx('no-matches')}>
                <span className={cx('icon')} />
                No matches found
              </p>
            )}
        </div>
      </div>
    </section>
  );
};

TeamMembers.propTypes = {
  filters: PropTypes.shape({}).isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
  })).isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

export default TeamMembers;
