import { useRef } from 'react'

export const useThrottle = (callback: () => void, interval: number) => {
  let wait = useRef<boolean>(false);
  return () => {
    if (!wait.current) {
      callback();

      wait.current = true;
      setTimeout(function () {
        wait.current = false;
      }, interval);
    }
  }
}
