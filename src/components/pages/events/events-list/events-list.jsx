import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './events-list.module.scss';
import FormattedDate from './formatted-date';

const cx = classNames.bind(styles);

const EventsList = ({ activeYear, rootPath, eventsGroupedByYears }) => {
  const years = Object.keys(eventsGroupedByYears).sort((a, b) => b - a);
  const eventsByYear = eventsGroupedByYears[activeYear];
  const handleClick = (event) => {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    navigate(href, {
      state: { preventScroll: true },
    });
  };

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('years-wrapper')}>
          {years.map((year, index) => (
            <a
              className={cx('year', { active: activeYear === year })}
              href={`${rootPath}${year}/`}
              key={index}
              onClick={(event) => { handleClick(event); }}
            >
              {year}
            </a>
          ))}
        </div>
        <ul className={cx('items-wrapper')}>
          {eventsByYear && eventsByYear.map(({
            url,
            title,
            item: { schedule, description },
          }, index) => (
            <li className={cx('item')} key={index}>
              <Link className={cx('title')} to={url}>{title}</Link>
              <div className={cx('details')}>
                <span className={cx('time')}>
                  <FormattedDate schedule={schedule} />
                </span>
                {' '}
                –
                {' '}
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

EventsList.propTypes = {
  eventsGroupedByYears: PropTypes.objectOf(
    PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string,
      title: PropTypes.string.isRequired,
      item: PropTypes.shape({
        schedule: PropTypes.shape({
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string,
          time: PropTypes.string,
        }).isRequired,
        description: PropTypes.string.isRequired,
      }),
    })),
  ),
  activeYear: PropTypes.string,
  rootPath: PropTypes.string.isRequired,
};

EventsList.defaultProps = {
  eventsGroupedByYears: [],
  activeYear: null,
};

export default EventsList;
