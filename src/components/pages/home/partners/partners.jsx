import classNames from 'classnames/bind';
import { motion, AnimatePresence } from 'framer-motion';
import GatsbyImage from 'gatsby-image';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import motionFadeAnimation from 'constants/motion-fade-animation';
import useAutoChangeableIndex from 'hooks/use-auto-changeable-index';
import Quote from 'icons/quote.inline.svg';

import styles from './partners.module.scss';

const cx = classNames.bind(styles);

export const ITEM_CHANGE_INTERVAL = 5000; // milliseconds

const Partners = ({ items, itemButtonText }) => {
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

  // eslint-disable-next-line react/prop-types
  const Tabs = ({ className }) => (
    <div className={cx('tabs-wrapper', className)}>
      {/* eslint-disable-next-line react/prop-types */}
      {items.map((item, index) => {
        const number = index + 1;
        const isActive = index === activeItemIndex;

        const handleClick = () => restartAnimation(index);

        return (
          <Heading
            className={cx('tab', { active: isActive, animationStarted: isAnimationStarted })}
            tag="button"
            size="lg"
            color="quaternary"
            type="button"
            key={index}
            onClick={handleClick}
          >
            {number}
          </Heading>
        );
      })}
    </div>
  );

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container', 'inner')} ref={animationStartRef}>

        <div className={cx('details')}>
          <div className={cx('photo-wrapper')}>
            <AnimatePresence exitBeforeEnter>
              {items.map(({ photo }, index) => {
                const isActive = index === activeItemIndex;
                if (!isActive) return null;

                return (
                  <motion.div {...motionFadeAnimation} key={index}>
                    <GatsbyImage className={cx('photo')} fluid={photo.localFile.childImageSharp.fluid} />
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <span className={cx('rectangle', 'rectangle-1')} aria-hidden />
            <span className={cx('rectangle', 'rectangle-2')} aria-hidden />
            <span className={cx('rectangle', 'rectangle-3')} aria-hidden />
          </div>

          <div className={cx('info')}>
            <AnimatePresence exitBeforeEnter>
              {items.map(({ name, position }, index) => {
                const isActive = index === activeItemIndex;
                if (!isActive) return null;

                return (
                  <motion.div {...motionFadeAnimation} key={index}>
                    <Heading className={cx('name')} tag="h3" size="lg">{name}</Heading>
                    <span className={cx('position')}>{position}</span>
                  </motion.div>
                );
              })}
            </AnimatePresence>

            <Tabs className={cx('sm-hidden')} />
          </div>
        </div>

        <div className={cx('content')}>
          <Quote className={cx('quote-icon')} aria-hidden />
          <AnimatePresence exitBeforeEnter>
            {items.map(({ text, buttonLink: { url: buttonUrl } }, index) => {
              const isActive = index === activeItemIndex;
              if (!isActive) return null;

              return (
                <motion.div {...motionFadeAnimation} key={index}>
                  <Heading className={cx('text')} tag="blockquote" size="xl" innerHTML={text} />
                  <Button to={buttonUrl}>{itemButtonText}</Button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <Tabs className={cx('sm-visible')} />
      </div>
    </section>
  );
};

Partners.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    photo: PropTypes.objectOf(PropTypes.any).isRequired,
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    buttonLink: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  itemButtonText: PropTypes.string.isRequired,
};

export default Partners;
