import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import Appuio from './images/appuio.inline.svg';
import ManagedServices from './images/managed-services.inline.svg';
import OpenSource from './images/open-source.inline.svg';
import VSHNSynSupport from './images/vshn-syn-support.inline.svg';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

const images = [
  <Appuio className={cx('image')} />,
  <ManagedServices className={cx('image')} />,
  <VSHNSynSupport className={cx('image')} />,
  <OpenSource className={cx('image')} />,
];

const Item = ({ number, title, footerText, link }) => (
  <li className={cx('wrapper')}>
    <Link className={cx('inner')} to={link}>
      <Heading className={cx('number')} tag="span" size="lg" aria-hidden>{number}</Heading>
      {images[`${number - 1}`]}
      <div className={cx('content')}>
        <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
        <span className={cx('footer-text')}>{footerText}</span>
      </div>
    </Link>
  </li>
);

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  footerText: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

Item.defaultProps = {

};

export default Item;
