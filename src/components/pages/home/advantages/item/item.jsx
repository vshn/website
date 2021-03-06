import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import GetBackTimeImage from './images/get-back-time.inline.svg';
import IncreaseSecurityImage from './images/increase-security.inline.svg';
import ReduceCostImage from './images/reduce-cost.inline.svg';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

const images = {
  getBackTime: GetBackTimeImage,
  increaseSecurity: IncreaseSecurityImage,
  reduceCost: ReduceCostImage,
};

const Item = ({ number, title, link: { url, title: footerText }, imageName }) => {
  const Image = images[imageName];

  return (
    <li className={cx('wrapper')}>
      <Link className={cx('inner')} to={url}>
        <Heading className={cx('number')} tag="span" size="lg" aria-hidden>{number}</Heading>
        <Image className={cx('image')} aria-hidden />
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h3" size="lg">{title}</Heading>
          <span className={cx('footer-text')}>{footerText}</span>
        </div>
      </Link>
    </li>
  );
};

Item.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  imageName: PropTypes.string.isRequired,
};

export default Item;
