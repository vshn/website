import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';

import circles from './images/circles.svg';

import styles from './stories.module.scss';

const cx = classNames.bind(styles);

const Stories = ({ stories }) => (
  <article className={cx('wrapper')}>
    <span className={cx('category')}>{stories.category}</span>
    <Heading className={cx('title')} tag="h2" size="xl" color="tertiary" innerHTML={stories.title} />
    <p className={cx('description')}>{stories.description}</p>
    <Button className={cx('link')} to={stories.footerUrl}>{stories.footerText}</Button>
    <img className={cx('circles')} src={circles} alt="" aria-hidden />
  </article>
);

Stories.propTypes = {
  stories: PropTypes.shape({
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    footerUrl: PropTypes.string.isRequired,
    footerText: PropTypes.string.isRequired,
  }).isRequired,
};

Stories.defaultProps = {

};

export default Stories;
