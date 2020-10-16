import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import useAutoChangeableIndex from 'hooks/use-auto-changeable-index';
import Arrow from 'icons/arrow.inline.svg';
import motionFadeAnimation from 'constants/motion-fade-animation';

import Item from './item';

import illustration from './images/illustration.svg';

import shape from './images/shape.svg';
import styles from './products.module.scss';

const cx = classNames.bind(styles);

export const ITEM_CHANGE_INTERVAL = 5000; // milliseconds

const Products = ({ title, subtitle, items }) => {
  const [animationStartRef, isAnimationStarted] = useInView({
    triggerOnce: true,
  });

  const [
    activeItemIndex,
    startAnimation,
    restartAnimation,
    nextItem,
    previousItem,
  ] = useAutoChangeableIndex(
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
          <Heading className={cx('subtitle')} tag="p" size="xl" innerHTML={subtitle} />

          <div className={cx('items-wrapper')}>
            <button className={cx('button')} type="button" aria-label="Previous product" onClick={previousItem}>
              <Arrow className={cx('arrow', 'flipped')} />
            </button>

            <div className={cx('items-inner')}>
              {items.map(({ name }, index) => {
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
              })}
            </div>

            <button className={cx('button')} type="button" aria-label="Next product" onClick={nextItem}>
              <Arrow className={cx('arrow')} />
            </button>
          </div>
        </div>

        <div className={cx('details')}>
          <AnimatePresence exitBeforeEnter>
            {items.map(({ detailsTitle, detailsContent }, index) => {
              const isActive = index === activeItemIndex;
              if (!isActive) return null;

              return (
                <motion.div className={cx('details-inner')} key={index} {...motionFadeAnimation}>
                  <Heading className={cx('details-title')} size="lg">{detailsTitle}</Heading>
                  <div className={cx('details-content')} dangerouslySetInnerHTML={{ __html: detailsContent }} />
                </motion.div>
              );
            })}
          </AnimatePresence>

          <span className={cx('details-rectangle', 'details-rectangle-1')} aria-hidden />
          <span className={cx('details-rectangle', 'details-rectangle-2')} aria-hidden />
          <span className={cx('details-rectangle', 'details-rectangle-3')} aria-hidden />
          <span className={cx('details-rectangle', 'details-rectangle-4')} aria-hidden />
        </div>

        <div className={cx('bullets-wrapper')}>
          {Array.from({ length: items.length }).map((item, index) => {
            const isActive = index === activeItemIndex;

            const handleClick = () => restartAnimation(index);

            return (
              <span
                className={cx('bullet', { active: isActive })}
                tabIndex="0"
                role="button"
                aria-label={`Go to product ${index + 1}`}
                onKeyPress={handleClick}
                onClick={handleClick}
                key={index}
              />
            );
          })}
        </div>
      </div>

      <img className={cx('shape')} src={shape} aria-hidden alt="" />
      <img className={cx('illustration')} src={illustration} aria-hidden alt="" />
    </section>
  );
};

Products.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      detailsTitle: PropTypes.string.isRequired,
      detailsContent: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Products;
