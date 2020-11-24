import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';

import styles from './events-list.module.scss';
import FormattedDate from './formatted-date';

const cx = classNames.bind(styles);

const EventsList = ({ eventYear, rootPath, items = [] }) => {
  const eventsByYear = {};
  items.forEach((yearEvent) => {
    const { item } = yearEvent;
    const date = item.schedule.startDate;
    const year = new Date(date).getFullYear();
    const thisYearEvents = eventsByYear[year] || [];
    thisYearEvents.push(yearEvent);
    eventsByYear[year] = thisYearEvents;
  });
  const years = Object.keys(eventsByYear).sort((a, b) => b - a);
  const eventForYear = eventsByYear[eventYear];

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
              className={cx('year', { active: eventYear === year })}
              href={`${rootPath}${year}/`}
              key={index}
              onClick={(event) => { handleClick(event); }}
            >
              {year}
            </a>
          ))}
        </div>
        <ul className={cx('items-wrapper')}>
          {eventForYear && eventForYear.map(({
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
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
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
  eventYear: PropTypes.string,
  rootPath: PropTypes.string.isRequired,
};

EventsList.defaultProps = {
  items: [],
  eventYear: null,
};

export default EventsList;
