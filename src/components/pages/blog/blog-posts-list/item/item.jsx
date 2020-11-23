import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ title, acf: { shortDescription }, date, uri: buttonUrl, ctaButtonText }) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('en-US', { month: 'short' });

  return (
    <article className={cx('wrapper')}>
      <div className={cx('date')}>
        <span className={cx('day')}>{day}</span>
        <span className={cx('month')}>{month}</span>
      </div>

      <div>
        <Heading className={cx('title')} tag="h2" size="xl" color="primary">
          <Link to={buttonUrl}>
            {title}
          </Link>
        </Heading>
        <p className={cx('short-description')}>{shortDescription}</p>
        <Button to={buttonUrl} size="sm">{ctaButtonText}</Button>
      </div>
    </article>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  acf: PropTypes.shape({
    shortDescription: PropTypes.string.isRequired,
  }).isRequired,
  date: PropTypes.string.isRequired,
  uri: PropTypes.string.isRequired,
  ctaButtonText: PropTypes.string.isRequired,
};

export default Item;
