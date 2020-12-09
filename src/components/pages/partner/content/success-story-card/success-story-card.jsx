import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import t from 'i18n';

import circles from './images/circles.svg';
import styles from './success-story-card.module.scss';

const cx = classNames.bind(styles);

const SuccessStoryCard = (
  { successStory: { title, acf: { description }, footerUrl }, footerText, locale },
) => (
  <article className={cx('wrapper')}>
    <span className={cx('category')}>{t[locale].successStories.title}</span>
    <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={title} />
    <p className={cx('description')}>{description}</p>
    <Button className={cx('link')} size="xs" to={footerUrl}>{footerText}</Button>
    <img className={cx('circles')} src={circles} alt="" aria-hidden />
  </article>
);

SuccessStoryCard.propTypes = {
  successStory: PropTypes.shape({
    title: PropTypes.string.isRequired,
    acf: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }),
    footerUrl: PropTypes.string.isRequired,
  }),
  footerText: PropTypes.string.isRequired,
  locale: PropTypes.oneOf(['en', 'de']).isRequired,
};

SuccessStoryCard.defaultProps = {
  successStory: null,
};

export default SuccessStoryCard;
