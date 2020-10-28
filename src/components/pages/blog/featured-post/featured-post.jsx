import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './featured-post.module.scss';
import backgroundImageLgDown from './images/background-image-lg-down.svg';
import backgroundImageLgUp from './images/background-image-lg-up.svg';

const cx = classNames.bind(styles);

const FeaturedPost = (
  { post: { date, title, acf: { shortDescription }, uri: buttonUrl }, footerText },
) => {
  const day = new Date(date).getDate();
  const month = new Date(date).toLocaleString('en-US', { month: 'short' });

  return (
    <article className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('date')}>
          <span className={cx('day')}>{day}</span>
          <span className={cx('month')}>{month}</span>
        </div>

        <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />

        <div className={cx('content')}>
          <p className={cx('short-description')}>{shortDescription}</p>
          <Button size="sm" to={buttonUrl}>{footerText}</Button>
        </div>
      </div>

      <img className={cx('background-image', 'lg-hidden')} src={backgroundImageLgUp} alt="" aria-hidden />
      <img className={cx('background-image', 'lg-visible')} src={backgroundImageLgDown} alt="" aria-hidden />
    </article>
  );
};

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      shortDescription: PropTypes.string.isRequired,
    }).isRequired,
    uri: PropTypes.string.isRequired,
  }).isRequired,
  footerText: PropTypes.string.isRequired,
};

export default FeaturedPost;
