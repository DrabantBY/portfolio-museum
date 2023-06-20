import { useState, useEffect, useRef } from 'react';
import throttle from 'lodash.throttle';

const useScrollAnimation = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScrollHandler = throttle(() => {
      if (imageRef.current) {
        const { height, top } = imageRef.current.getBoundingClientRect();

        if (window.innerHeight > top - 0.2 * height) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }, 300);

    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return { visible, imageRef };
};

export default useScrollAnimation;
