import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Button from 'components/shared/button';
import Heading from 'components/shared/heading';
import useLottie from 'hooks/use-lottie';
import getTextWithoutParagraph from 'utils/get-text-without-paragraph';

import initialAnimationData from './data/initial-animation.json';
import loopedAnimationData from './data/looped-animation.json';
import styles from './hero.module.scss';
import shape1 from './images/shape-1.svg';
import shape2 from './images/shape-2.svg';

const cx = classNames.bind(styles);

const Hero = ({ title, description, buttonLink: { url: buttonUrl, title: buttonText } }) => {
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
        <Heading className={cx('title')} innerHTML={getTextWithoutParagraph(title)} />
        <p className={cx('description')}>{description}</p>
        <Button className={cx('button')} to={buttonUrl}>{buttonText}</Button>

        <img className={cx('shape-1')} src={shape1} alt="" aria-hidden />
        <img className={cx('shape-2')} src={shape2} alt="" aria-hidden />

        <div className={cx('animation-wrapper', { visible: isInitialAnimationReady })} ref={animationPlayRef} aria-hidden>
          <img className={cx('animation-shape')} src={shape1} alt="" />
          <div
            className={cx('animation', { hidden: isInitialAnimationFinished })}
            ref={initialAnimationContainerRef}
          />
          <div
            className={cx('animation', { hidden: !isInitialAnimationFinished })}
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
  buttonLink: PropTypes.shape({
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Hero;
