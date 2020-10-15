import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import circles from './images/circles.svg';

import styles from './success-stories-card.module.scss';

const cx = classNames.bind(styles);

const SuccessStoriesCard = ({ category, title, description, footerUrl, footerText }) => (
  <article className={cx('wrapper')}>
    <span className={cx('category')}>{category}</span>
    <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />
    <p className={cx('description')}>{description}</p>
    <Button className={cx('link')} to={footerUrl}>{footerText}</Button>
    <img className={cx('circles')} src={circles} alt="" aria-hidden />
  </article>
);

SuccessStoriesCard.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  footerUrl: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
};

export default SuccessStoriesCard;
