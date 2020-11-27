import classNames from 'classnames/bind';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';

import styles from './events-list.module.scss';
import FormattedDate from './formatted-date';

const cx = classNames.bind(styles);

const EventsList = ({ years, rootPath, events }) => {
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
            <Link
              className={cx('year')}
              activeClassName={cx('active')}
              to={index === 0 ? rootPath : `${rootPath}${year}/`}
              key={index}
              onClick={(event) => { handleClick(event); }}
            >
              {year}
            </Link>
          ))}
        </div>
        <ul className={cx('items-wrapper')}>
          {/* event variables is deprecated so we have to use alternative */}
          {events.map((cEvent, index) => (
            <li className={cx('item')} key={index}>
              <Link className={cx('title')} to={cEvent.acf.link}>{cEvent.title}</Link>
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
            </li>
          ))}
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
};

EventsList.defaultProps = {
  eventsGroupedByYears: [],
  activeYear: null,
};

export default EventsList;
