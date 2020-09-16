import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import styles from './header.module.scss';

const cx = classNames.bind(styles);

const Header = ({ title, text, buttonText, buttonUrl, day, month }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container')}>
      <div className={cx('content')}>
        <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />
        <div className={cx('description')}>
          <p className={cx('text')}>{text}</p>
          <Button size="sm" to={buttonUrl}>{buttonText}</Button>

          <div className={cx('date')} aria-hidden>
            <span>{day}</span>
            <span>{month}</span>
          </div>

          <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-4')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-5')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-6')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-7')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-8')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-9')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-10')} aria-hidden />
          <span className={cx('rectangle', 'rectangle-11')} aria-hidden />
        </div>
      </div>
    </div>
  </section>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  day: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
};

export default Header;
