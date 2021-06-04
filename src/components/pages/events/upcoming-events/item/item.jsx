import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';
import getLocaleDateNames from 'utils/locale-date-names';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = (
  {
    title,
    acf: {
      link,
      logo: {
        localFile: { publicURL: logoUrl },
      },
      schedule: { startDate },
    },
  },
) => {
  const { weekdayShort, dayMonth, year } = getLocaleDateNames(startDate);
  return (
    <li className={cx('wrapper')}>
      <Link className={cx('inner')} to={link}>
        <div className={cx('image-wrapper')}>
          <img src={logoUrl} className={cx('image')} alt="" />
        </div>
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
        </div>

        <div className={cx('date')}>
          <span>
            {weekdayShort}
            .
            {' '}
          </span>
          <span>{dayMonth}</span>
          {' '}
          <span>{year}</span>
        </div>
      </Link>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    link: PropTypes.string.isRequired,
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
};

export default Item;
