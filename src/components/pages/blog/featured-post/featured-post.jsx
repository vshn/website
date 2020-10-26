import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import styles from './featured-post.module.scss';
import backgroundImageLgDown from './images/background-image-lg-down.svg';
import backgroundImageLgUp from './images/background-image-lg-up.svg';

const cx = classNames.bind(styles);

const FeaturedPost = ({ title, text, buttonText, buttonUrl, date }) => {
  const day = date.getDate();
  const month = date.toLocaleString('en-US', { month: 'short' });

  return (
    <article className={cx('wrapper')}>
      <div className={cx('container', 'inner')}>
        <div className={cx('date')}>
          <span className={cx('day')}>{day}</span>
          <span className={cx('month')}>{month}</span>
        </div>

        <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />

        <div className={cx('content')}>
          <p className={cx('text')}>{text}</p>
          <Button size="sm" to={buttonUrl}>{buttonText}</Button>
        </div>
      </div>

      <img className={cx('background-image', 'lg-hidden')} src={backgroundImageLgUp} alt="" aria-hidden />
      <img className={cx('background-image', 'lg-visible')} src={backgroundImageLgDown} alt="" aria-hidden />
    </article>
  );
};

FeaturedPost.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
};

export default FeaturedPost;
