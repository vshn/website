import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import backgroundImage from './images/background-image.svg';

import styles from './featured-post.module.scss';

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

        <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-4')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-5')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-6')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-7')} aria-hidden />
        <span className={cx('rectangle', 'rectangle-8')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-1')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-2')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-3')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-4')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-5')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-6')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-7')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-8')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-9')} aria-hidden />
        <span className={cx('ellipse', 'ellipse-10')} aria-hidden />
      </div>

      <img className={cx('background-image')} src={backgroundImage} alt="" aria-hidden />
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
