import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = (
  {
    url,
    title,
    item: {
      logo: {
        localFile: { publicURL: logoUrl },
      },
      description,
      schedule: { startDate },
    },
  },
) => {
  const day = new Date(startDate).toLocaleString('en-US', { weekday: 'short' });
  const dateMonth = new Date(startDate).toLocaleString('en-US', { month: 'long', day: 'numeric' });
  const year = new Date(startDate).toLocaleString('en-US', { year: 'numeric' });
  return (
    <li className={cx('wrapper')}>
      <Link className={cx('inner')} to={url}>
        <img src={logoUrl} className={cx('image')} alt="" />
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
          <p className={cx('description')}>{description}</p>
        </div>

        <div className={cx('date')}>
          <span>
            {day}
            .
            {' '}
          </span>
          <span>{dateMonth}</span>
          {' '}
          <span>{year}</span>
        </div>
      </Link>
    </li>
  );
};

Item.propTypes = {
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
};

export default Item;
