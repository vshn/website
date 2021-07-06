import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';
import getLocaleDateNames from 'utils/locale-date-names';

import styles from './events-list.module.scss';
import FormattedDate from './formatted-date';

const cx = classNames.bind(styles);

const EventsList = ({ years, rootPath, events, pageYear }) => {
  const scrollTo = () => {
    const elementClassName = styles.wrapper || 'wrapper';
    const element = document.querySelector(`.${elementClassName}`);
    const offset = -50;
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;

    window.scrollTo({ top: y });
  };

  useEffect(() => {
    // scroll the page to the podcast list
    // when navigating through the pages
    if (pageYear !== years[0]) {
      scrollTo();
    }
  }, [pageYear, years]);

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <Heading className={cx('title')} tag="h2">Past events</Heading>
        <div className={cx('years-wrapper')}>
          {years.map((year, index) => (
            <Link
              className={cx('year')}
              activeClassName={cx('active')}
              to={index === 0 ? rootPath : `${rootPath}${year}/`}
              key={index}
            >
              {year}
            </Link>
          ))}
        </div>
        <ul className={cx('items-wrapper')}>
          {/* event variables is deprecated so we have to use alternative */}
          {events.map((cEvent, index) => {
            const { day, month } = getLocaleDateNames(cEvent.acf.schedule.startDate);

            return (
              <li className={cx('item')} key={index}>
                <div className={cx('date')}>
                  <span className={cx('day')}>{day}</span>
                  <span>{month}</span>
                </div>
                <div>
                  <Link className={cx('event-title')} to={cEvent.acf.link}>{cEvent.title}</Link>
                  <div className={cx('details')}>
                    <span className={cx('time')}>
                      <FormattedDate schedule={cEvent.acf.schedule} />
                    </span>
                    {' '}
                    –
                    {' '}
                    <span
                      dangerouslySetInnerHTML={
                    { __html: getTextWithoutParagraph(cEvent.acf.description) }
                  }
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

EventsList.propTypes = {
  years: PropTypes.arrayOf(PropTypes.string).isRequired,
  rootPath: PropTypes.string.isRequired,
  events:
    PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      acf: PropTypes.shape({
        link: PropTypes.string.isRequired,
        schedule: PropTypes.shape({
          startDate: PropTypes.string.isRequired,
          endDate: PropTypes.string,
          time: PropTypes.string,
        }).isRequired,
        description: PropTypes.string.isRequired,
      }),
    })).isRequired,
  pageYear: PropTypes.number.isRequired,
};

export default EventsList;
