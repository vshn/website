import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import CardItem from './card-item';
import Item from './item';
import styles from './upcoming-events.module.scss';

const cx = classNames.bind(styles);

const UpcomingEvents = (props) => {
  const { title, featuredUpcomingEvents, upcomingEventsByYear, className, itemFooterText } = props;
  return (
    <section className={cx('wrapper', className)}>
      <div className="container">
        <Heading className={cx('title')}>{title}</Heading>
        <ul className={cx('items-wrapper')}>
          <div className={cx('cards-wrapper')}>
            {featuredUpcomingEvents.map((upcomingEvent, index) => (
              <CardItem key={index} {...upcomingEvent} itemFooterText={itemFooterText} />
            ))}
          </div>
          {upcomingEventsByYear && Object.values(upcomingEventsByYear).length > 0 && (
          <div className={cx('events-wrapper')}>
            {Object.entries(upcomingEventsByYear)
              .map(([year, events], index) => !!events.length && (
              <div className={cx('events-group')} key={index}>
                <Heading className={cx('year-title')} size="lg" tag="h4">{year}</Heading>
                {events.map((upcomingEvent, index) => (
                  <Item key={index} {...upcomingEvent} />
                ))}
              </div>
              ))}
          </div>
          )}
        </ul>
      </div>
    </section>
  );
};

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
  className: PropTypes.string,
  itemFooterText: PropTypes.string.isRequired,
};

UpcomingEvents.defaultProps = {
  upcomingEventsByYear: null,
  className: null,
};

export default UpcomingEvents;
