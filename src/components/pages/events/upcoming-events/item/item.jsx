import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import DinaCon from './images/dinacon.inline.svg';
import Meetup from './images/meetup.inline.svg';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

const images = [
  <DinaCon className={cx('image')} />,
  <Meetup className={cx('image')} />,
  <Meetup className={cx('image')} />,
];

const Item = ({ url, title, description, date, index }) => {
  const day = date.toLocaleString('en-US', { weekday: 'short' });
  const dateMonth = date.toLocaleString('en-US', { month: 'long', day: 'numeric' });
  const year = date.toLocaleString('en-US', { year: 'numeric' });
  return (
    <li className={cx('wrapper')}>
      <Link className={cx('inner')} to={url}>
        {images[index]}
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
  description: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  index: PropTypes.number.isRequired,
};

export default Item;
