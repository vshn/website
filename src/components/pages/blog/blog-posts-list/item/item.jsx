import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ title, text, date, buttonUrl, buttonText }) => {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });

  return (
    <article className={cx('wrapper')}>
      <div className={cx('date')}>
        <span className={cx('day')}>{day}</span>
        <span className={cx('month')}>{month}</span>
      </div>
      <div className={cx('content')}>
        <Heading className={cx('title')} tag="h2" size="xl" color="primary">{title}</Heading>
        <p className={cx('text')}>{text}</p>
        <Button to={buttonUrl} size="sm">{buttonText}</Button>
      </div>
    </article>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  buttonUrl: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Item;
