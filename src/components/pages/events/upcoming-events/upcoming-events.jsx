import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';

import Item from './item';
import styles from './upcoming-events.module.scss';

const cx = classNames.bind(styles);

const UpcomingEvents = ({ title, items }) => (
  <section className={cx('wrapper')}>
    <div className="container">
      <Heading className={cx('title')}>{title}</Heading>
      <ul className={cx('items-wrapper')}>
        {items.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </ul>
    </div>
  </section>
);

UpcomingEvents.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    item: PropTypes.shape({
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
