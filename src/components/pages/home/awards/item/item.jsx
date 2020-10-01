import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { useInView } from 'react-intersection-observer';

import Heading from 'components/shared/heading';
import Link from 'components/shared/link';

import styles from './item.module.scss';
import Confetti from '../confetti';

const cx = classNames.bind(styles);

const Item = ({ image, title, description, url }) => {
  const [animationPlayRef, isAnimationStarted] = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <li className={cx('wrapper')}>
      <Link className={cx('inner')} to={url}>
        <img className={cx('image')} src={image} alt="" aria-hidden />
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h3" size="lg" color="tertiary">{title}</Heading>
          <p className={cx('description')}>{description}</p>
          <span className={cx('read-more')}>Read more</span>
        </div>
      </Link>
      <div className={cx('confetti')} ref={animationPlayRef}>
        <Confetti showAnimate={isAnimationStarted} />
      </div>
    </li>
  );
};

Item.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Item;
