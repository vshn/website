import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const confetti = [
  // Confetti on the left side
  ['circle', 'xs'],
  ['circle', 'md'],
  ['circle', 'md', 'bordered'],
  ['circle', 'xs'],
  ['circle', 'xs'],
  ['circle', 'md'],
  ['circle', 'sm'],
  ['rectangle'],
  ['circle', 'xs'],
  ['circle', 'md', 'bordered'],
  ['circle', 'md'],
  ['circle', 'sm'],
  ['circle', 'sm'],
  ['circle', 'xs'],

  // Confetti on the right side
  ['circle', 'xs'],
  ['circle', 'md'],
  ['circle', 'md', 'bordered'],
  ['circle', 'xs'],
  ['rectangle'],
  ['circle', 'sm'],
  ['circle', 'xs'],
  ['circle', 'xs'],
  ['circle', 'xs'],
  ['circle', 'xs'],
  ['circle', 'md'],
  ['line'],
  ['circle', 'md', 'bordered'],
  ['circle', 'xs'],
];

const Item = ({ icon: Icon, title, description, url }) => (
  <li className={cx('wrapper')}>
    <Link className={cx('inner')} to={url}>
      <Icon className={cx('icon')} aria-hidden />
      <Heading className={cx('title')} tag="h3" size="lg" color="tertiary">{title}</Heading>
      <p className={cx('description')}>{description}</p>
      <span className={cx('read-more')}>Read more</span>
    </Link>

    {confetti.map((confettoClasses, index) => (
      <span className={cx('confetto', `confetto-${index + 1}`, confettoClasses)} aria-hidden key={index} />
    ))}
  </li>
);

Item.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
