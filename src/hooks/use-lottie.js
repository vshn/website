import { useState, useRef, useEffect } from 'react';
import lottie from 'lottie-web';

const defaultOptions = {
  renderer: 'svg',
  loop: false,
  autoplay: false,
};

export default function useLottie(options, events = {}) {
  const animationRef = useRef();
  const [animation, setAnimation] = useState();

  useEffect(() => {
    const lottieAnimation = lottie.loadAnimation({
      container: animationRef.current,
      ...defaultOptions,
      ...options,
    });

    Object.entries(events).forEach(([eventName, cb]) => {
      lottieAnimation.addEventListener(eventName, cb.bind(lottieAnimation));
    });

    setAnimation(lottieAnimation);

    return () => lottieAnimation.destroy();
  }, [options, events]);

  return [animation, animationRef];
}
