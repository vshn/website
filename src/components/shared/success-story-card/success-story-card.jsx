import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import circles from './images/circles.svg';
import styles from './success-story-card.module.scss';

const cx = classNames.bind(styles);

const SuccessStoryCard = (
  { successStory: { title, acf: { category, description }, uri: footerUrl }, footerText },
) => (
  <article className={cx('wrapper')}>
    <span className={cx('category')}>{category}</span>
    <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />
    <p className={cx('description')}>{description}</p>
    <Button className={cx('link')} to={footerUrl}>{footerText}</Button>
    <img className={cx('circles')} src={circles} alt="" aria-hidden />
  </article>
);

SuccessStoryCard.propTypes = {
  successStory: PropTypes.shape({
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
    uri: PropTypes.string.isRequired,
  }).isRequired,
  footerText: PropTypes.string.isRequired,
};

export default SuccessStoryCard;
