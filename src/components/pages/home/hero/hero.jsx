import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import classNames from 'classnames/bind';

import Heading from 'components/shared/heading';
import Button from 'components/shared/button';
import useLottie from 'hooks/use-lottie';

import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

import initialAnimationData from './data/initial-animation.json';
import loopedAnimationData from './data/looped-animation.json';

import styles from './hero.module.scss';

const cx = classNames.bind(styles);

const Hero = ({ title, description, buttonText, buttonUrl }) => {
  const [animationPlayRef, isAnimationPlaying] = useInView();

  const [isInitialAnimationReady, setIsInitialAnimationReady] = useState(false);
  const [isLoopedAnimationReady, setIsLoopAnimationReady] = useState(false);

  const [isInitialAnimationFinished, setIsInitialAnimationFinished] = useState(false);

  const [initialAnimation, initialAnimationContainerRef] = useLottie(
    { animationData: initialAnimationData },
    {
      loaded_images() {
        setIsInitialAnimationReady(true);
      },
      complete() {
        setIsInitialAnimationFinished(true);
      },
    },
  );

  const [loopedAnimation, loopedAnimationContainerRef] = useLottie(
    {
      animationData: loopedAnimationData,
      loop: true,
    },
    {
      loaded_images() {
        setIsLoopAnimationReady(true);
      },
    },
  );

  useEffect(
    () => {
      if (initialAnimation && isInitialAnimationReady && isAnimationPlaying) {
        initialAnimation.play();
      }

      if (loopedAnimation && isLoopedAnimationReady && isInitialAnimationFinished) {
        if (isAnimationPlaying) {
          loopedAnimation.play();
        } else {
          loopedAnimation.pause();
        }
      }
    },
    [
      initialAnimation,
      isInitialAnimationReady,
      loopedAnimation,
      isLoopedAnimationReady,
      isInitialAnimationFinished,
      isAnimationPlaying,
    ],
  );

  return (
    <section className={cx('wrapper')}>
      <div className="container">
        <Heading className={cx('title')} innerHTML={title} />
        <p className={cx('description')}>{description}</p>
        <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

        <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
        <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />

        <div className={cx('illustration-wrapper', { visible: isAnimationPlaying })} aria-hidden ref={animationPlayRef}>
          <img className={cx('illustration-shape')} src={shape1} alt="" />
          <div
            className={cx('illustration', { visible: !isInitialAnimationFinished && isInitialAnimationReady })}
            ref={initialAnimationContainerRef}
          />
          <div
            className={cx('illustration', 'looped', { visible: isInitialAnimationFinished && isLoopedAnimationReady })}
            ref={loopedAnimationContainerRef}
          />
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
};

export default Hero;
