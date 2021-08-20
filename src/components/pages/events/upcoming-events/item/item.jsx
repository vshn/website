import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Link from 'components/shared/link';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';
import getLocaleDateNames from 'utils/locale-date-names';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = (
  {
    title,
    acf: {
      link,
      description,
      schedule,
    },
  },
) => {
  const { day, month } = getLocaleDateNames(schedule.startDate);

  return (
    <li className={cx('item')}>
      <div className={cx('date')}>
        <span className={cx('day')}>{day}</span>
        <span>{month}</span>
      </div>
      <div>
        <Link className={cx('event-title')} to={link}>{title}</Link>
        <div className={cx('details')}>
          <span
            dangerouslySetInnerHTML={
      { __html: getTextWithoutParagraph(description) }
    }
          />
        </div>
      </div>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    schedule: PropTypes.shape({
      startDate: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

Item.defaultProps = {

};

export default Item;
