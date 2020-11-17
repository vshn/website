import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import Heading from 'components/shared/heading';

import styles from './events-list.module.scss';

const cx = classNames.bind(styles);

const data = {
  2020: [
    {
      title: 'WeAreDevelopers Live Week',
      time: 'October 5 – 9 2020',
      shortDescription: 'Aarno & Adrian are present as speaker & panelists in the DevOps & Security tracks!',
    },
    {
      title: 'TechTalkThursday #13',
      time: 'Thursday October 1 2020 ',
      shortDescription: 'Tobias Brunner’s talk: <a>How Project Syn helps to manage a fleet of Kubernetes Clusters</a>',
    },
    {
      title: 'Cloud Native Computing Meetup',
      time: 'Thursday August 27 2020 3pm',
      shortDescription: 'remote / online – <a>Recap & Recording</a>',
    },
    {
      title: 'KubeCon and CloudNativeCon Europe 2020',
      time: 'August 17 – 20 2020',
      shortDescription: 'remote / online',
    },
    {
      title: 'EURODOG (The European DevOps Group)',
      time: 'August 17 – 20 2020',
      shortDescription: 'remote / online',
    },
    {
      title: 'TechTalkThursday #13',
      time: 'Thursday October 1 2020',
      shortDescription: 'Tobias Brunner’s talk: <a>How Project Syn helps to manage a fleet of Kubernetes Clusters</a>',
    },
    {
      title: 'Cloud Native Computing Meetup',
      time: 'Thursday August 27 2020 3pm',
      shortDescription: 'remote / online – <a>Recap & Recording</a>',
    },
    {
      title: 'KubeCon and CloudNativeCon Europe 2020',
      time: 'August 17 – 20 2020',
      shortDescription: 'remote / online',
    },
    {
      title: 'EURODOG (The European DevOps Group)',
      time: 'August 17 – 20 2020',
      shortDescription: 'remote / online',
    },
  ],
  2019: [
    {
      title: 'WeAreDevelopers Live Week',
      time: 'October 5 – 9 2020',
      shortDescription: 'Aarno & Adrian are present as speaker & panelists in the DevOps & Security tracks!',
    },
    {
      title: 'TechTalkThursday #13',
      time: 'Thursday October 1 2020 ',
      shortDescription: 'Tobias Brunner’s talk: How Project Syn helps to manage a fleet of Kubernetes Clusters',
    },
    {
      title: 'WeAreDevelopers Live Week',
      time: 'October 5 – 9 2020',
      shortDescription: 'Aarno & Adrian are present as speaker & panelists in the DevOps & Security tracks!',
    },
  ],
  2018: [
    {
      title: 'WeAreDevelopers Live Week',
      time: 'October 5 – 9 2020',
      shortDescription: 'Aarno & Adrian are present as speaker & panelists in the DevOps & Security tracks!',
    },
    {
      title: 'TechTalkThursday #13',
      time: 'Thursday October 1 2020 ',
      shortDescription: 'Tobias Brunner’s talk: How Project Syn helps to manage a fleet of Kubernetes Clusters',
    },
  ],
};

const EventsList = () => {
  const years = Object.keys(data).sort((a, b) => b - a);
  const [activeYear, setActiveYear] = useState(years[0]);

  const items = data[activeYear];
  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <div className={cx('years-wrapper')}>
          {years.map((year, index) => (
            <button
              className={cx('year', { active: year === activeYear })}
              type="button"
              key={index}
              onClick={() => setActiveYear(year)}
            >
              {year}
            </button>
          ))}
        </div>
        <ul className={cx('items-wrapper')}>
          {items.map(({ title, time, shortDescription }, index) => (
            <li className={cx('item')} key={index}>
              <Heading className={cx('title')} tag="h3" size="md">{title}</Heading>
              <div className={cx('details')}>
                <span className={cx('time')}>{time}</span>
                {' '}
                –
                {' '}
                <span dangerouslySetInnerHTML={{ __html: shortDescription }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

EventsList.propTypes = {

};

EventsList.defaultProps = {

};

export default EventsList;
