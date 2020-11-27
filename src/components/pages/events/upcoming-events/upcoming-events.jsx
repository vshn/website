import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Item from './item';
import styles from './upcoming-events.module.scss';

const cx = classNames.bind(styles);

const UpcomingEvents = ({ title, upcomingEvents }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')}>{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {upcomingEvents.map((upcomingEvent, index) => (
          <Item key={index} {...upcomingEvent} />
        ))}
      </ul>
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  title: PropTypes.string.isRequired,
  upcomingEvents: PropTypes.arrayOf(PropTypes.shape({
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
};

export default UpcomingEvents;
