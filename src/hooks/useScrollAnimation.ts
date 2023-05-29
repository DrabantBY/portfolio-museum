import { useState, useEffect, useRef } from 'react';
import { debounce } from '../utils';

const useScrollAnimation = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScrollHandler = debounce(() => {
      if (imageRef.current) {
        const { top: imagePosition } = imageRef.current.getBoundingClientRect();

        if (window.innerHeight > imagePosition) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }, 50);

    window.addEventListener('scroll', onScrollHandler);

    return () => {
      window.removeEventListener('scroll', onScrollHandler);
    };
  }, []);

  return { visible, imageRef };
};

export default useScrollAnimation;
