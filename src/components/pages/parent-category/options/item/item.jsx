import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import DevOpsEnablement from './images/devops-enablement.inline.svg';
import ManagedApplicationServices from './images/managed-application-services.inline.svg';
import ManagedContainerPlatforms from './images/managed-container-platforms.inline.svg';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

const images = [
  <DevOpsEnablement className={cx('image')} />,
  <ManagedContainerPlatforms className={cx('image')} />,
  <ManagedApplicationServices className={cx('image')} />,
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

export default Item;
