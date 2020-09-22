import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import useAutoChangeableIndex from 'hooks/use-auto-changeable-index';

import Item from './item';
import Details from './details';

import illustration from './images/illustration.svg';

import shape from './images/shape.svg';
import styles from './products.module.scss';

const cx = classNames.bind(styles);

export const ITEM_CHANGE_INTERVAL = 5000; // milliseconds

const Products = ({ title, description, items }) => {
  const [animationStartRef, isAnimationStarted] = useInView({
    triggerOnce: true,
  });

  const [activeItemIndex, startAnimation, restartAnimation] = useAutoChangeableIndex(
    items.length,
    { interval: ITEM_CHANGE_INTERVAL },
  );

  useEffect(() => {
    if (isAnimationStarted) startAnimation();
  }, [startAnimation, isAnimationStarted]);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')} ref={animationStartRef}>
        <div className={cx('content')}>
          <Heading className={cx('title')} tag="h2" size="sm" color="secondary">{title}</Heading>
          <Heading className={cx('description')} tag="p" size="xl" innerHTML={description} />

          <div className={cx('items-wrapper')}>
            {
              items.map(({ name }, index) => {
                const number = index + 1;
                const formattedNumber = number < 10 ? `0${number}.` : `${number}.`;

                const isActive = index === activeItemIndex;

                const handleClick = () => restartAnimation(index);

                return (
                  <Item
                    name={name}
                    number={formattedNumber}
                    isActive={isActive}
                    isAnimationStarted={isAnimationStarted}
                    onClick={!isActive ? handleClick : null}
                    key={index}
                  />
                );
              })
            }
          </div>
        </div>

        <AnimatePresence exitBeforeEnter>
          {items.map(({ detailsTitle, detailsContent }, index) => {
            const isActive = index === activeItemIndex;
            if (!isActive) return null;

            return <Details title={detailsTitle} content={detailsContent} key={index} />;
          })}
        </AnimatePresence>
      </div>

      <img className={cx('shape')} src={shape} aria-hidden alt="" />
      <img className={cx('illustration')} src={illustration} aria-hidden alt="" />
    </section>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      detailsTitle: PropTypes.string.isRequired,
      detailsContent: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Products;
