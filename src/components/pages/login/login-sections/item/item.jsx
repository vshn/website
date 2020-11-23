import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React from 'react';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';

import Appuio from './images/appuio.inline.svg';
import Vshn from './images/vshn.inline.svg';
import styles from './item.module.scss';

const cx = classNames.bind(styles);

const images = {
  appuio: Appuio,
  vshn: Vshn,
};

const Item = (
  { title, description, buttonLink: { url: buttonUrl, title: buttonText }, imageName },
) => {
  const Image = images[imageName];

  return (
    <li className={cx('wrapper')}>
      <Image className={cx('image')} aria-hidden />
      <div className={cx('content')}>
        <Heading className={cx('title')} size="lg">{title}</Heading>
        <p className={cx('description')}>{description}</p>
        <Button className={cx('button')} to={buttonUrl} size="xs">{buttonText}</Button>
      </div>
    </li>
  );
};

Item.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  imageName: PropTypes.string.isRequired,
};

export default Item;
