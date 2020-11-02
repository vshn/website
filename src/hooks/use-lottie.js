import lottie from 'lottie-web';
import { useRef, useEffect } from 'react';

const defaultOptions = {
  renderer: 'svg',
  loop: false,
  autoplay: false,
};

export default function useLottie(options, events = {}) {
  const animationRef = useRef();
  const animationContainerRef = useRef();

  useEffect(() => {
    if (!animationRef.current) {
      const lottieAnimation = lottie.loadAnimation({
        container: animationContainerRef.current,
        ...defaultOptions,
        ...options,
      });

      Object.entries(events).forEach(([eventName, cb]) => {
        lottieAnimation.addEventListener(eventName, cb.bind(lottieAnimation));
      });

      animationRef.current = lottieAnimation;
    }
  }, [options, events]);

  return [animationRef.current, animationContainerRef];
}
