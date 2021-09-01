import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import CardItem from './card-item';
import Item from './item';
import styles from './upcoming-events.module.scss';

const cx = classNames.bind(styles);

const UpcomingEvents = ({ title, featuredUpcomingEvents, upcomingEventsByYear }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')}>{title}</Heading>
      <ul className={cx('items-wrapper')}>
        <div className={cx('cards-wrapper')}>
          {featuredUpcomingEvents.map((upcomingEvent, index) => (
            <CardItem key={index} {...upcomingEvent} />
          ))}
        </div>
        {upcomingEventsByYear && (
        <div className={cx('events-wrapper')}>
          {Object.keys(upcomingEventsByYear).map((year, index) => {
            const events = Object.values(upcomingEventsByYear)[index];
            return (
              <div className={cx('events-group')} key={index}>
                <Heading className={cx('year-title')} size="lg" tag="h4">{year}</Heading>
                {events.map((upcomingEvent, index) => (
                  <Item key={index} {...upcomingEvent} />
                ))}
              </div>
            );
          })}
        </div>
        )}
      </ul>
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  title: PropTypes.string.isRequired,
  featuredUpcomingEvents: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      logo: PropTypes.shape({
        localFile: PropTypes.shape({
          publicURL: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      description: PropTypes.string.isRequired,
      schedule: PropTypes.shape({
        startDate: PropTypes.string.isRequired,
      }),
    }).isRequired,
  })).isRequired,
  upcomingEventsByYear: PropTypes.objectOf(PropTypes.any),
};

UpcomingEvents.defaultProps = {
  upcomingEventsByYear: null,
};

export default UpcomingEvents;
