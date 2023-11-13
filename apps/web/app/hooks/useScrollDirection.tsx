import { useState, useRef, useEffect, useCallback } from 'react';
import { useThrottle } from './useThrottle';

export type DIRECTION = 'up' | 'down' | null;

const THROTTLE_INTERVAL = 200;

export const useScrollDirection = (minHeight = 0): DIRECTION => {
  const currentScroll = useRef(0)
  const [diff, setDiff] = useState<number>(0);

  const isSticky = useCallback(useThrottle(() => {
    const diff = Math.floor(window.scrollY - currentScroll.current);

    currentScroll.current = window.scrollY;

    setDiff(diff)
  }, THROTTLE_INTERVAL), []);

  useEffect(() => {
    currentScroll.current = window.scrollY;

    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });

  return diff > 0 ? 'down' : 'up';
}
