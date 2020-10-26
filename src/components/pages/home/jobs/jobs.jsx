import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import image from './images/image.svg';
import styles from './jobs.module.scss';

const cx = classNames.bind(styles);

const Jobs = ({ title, description, buttonText, buttonUrl }) => (
  <section className={cx('wrapper')}>
    <div className={cx('container', 'inner')}>
      <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" highlightedWordsColor="secondary" innerHTML={title} />
      <p className={cx('description')}>{description}</p>
      <Button to={buttonUrl}>{buttonText}</Button>

    </div>
    <img className={cx('image')} src={image} alt="" aria-hidden />
  </section>
);

Jobs.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Jobs;
