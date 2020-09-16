import { useState, useEffect, useRef } from 'react';

export default function useAutoChangeableIndex(numberOfItems, options = {}) {
  const {
    initialIndex = 0,
    interval = 5000,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const timeoutId = useRef(null);

  const setNextIndex = (indexToSet) => {
    setCurrentIndex((currentIndex) => {
      if (typeof indexToSet !== 'undefined') return indexToSet;

      const nextIndex = currentIndex + 1;
      return nextIndex >= numberOfItems ? 0 : nextIndex;
    });
  };

  const setNextIndexLooped = (indexToSet) => {
    setNextIndex(indexToSet);
    timeoutId.current = setTimeout(setNextIndexLooped, interval);
  };

  const resetTimeout = () => {
    clearTimeout(timeoutId.current);
    timeoutId.current = null;
  };

  const start = (indexToStart = 0) => {
    // Return if loop is already started
    if (timeoutId.current) return;

    setNextIndexLooped(indexToStart);
  };

  const restart = (indexToStart = 0) => {
    resetTimeout();
    setNextIndexLooped(indexToStart);
  };

  useEffect(() => resetTimeout, []);

  return [currentIndex, start, restart];
}
