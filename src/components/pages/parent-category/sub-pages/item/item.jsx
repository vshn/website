import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';

const cx = classNames.bind(styles);

const Item = ({ number, title, footerText, link, icon: { localFile: { publicURL: iconUrl } } }) => (
  <li className={cx('wrapper')}>
    <Link className={cx('inner')} to={link.url}>
      <Heading className={cx('number')} tag="span" size="lg" aria-hidden>{number}</Heading>
      <img src={iconUrl} className={cx('image')} alt="" />
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
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  icon: PropTypes.shape({
    localFile: PropTypes.shape({
      publicURL: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Item;
