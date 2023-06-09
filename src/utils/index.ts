import { GALLERY } from '../constants';

export const handleTitle = (title: string): string => {
  return title
    .split(' ')
    .map((chunk) => chunk[0].toUpperCase() + chunk.slice(1))
    .join('');
};

export const shuffleGallery = () => {
  for (let i = GALLERY.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));
    [GALLERY[i], GALLERY[random]] = [GALLERY[random], GALLERY[i]];
  }
  return GALLERY;
};

export const debounce = (fn: () => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, delay);
  };
};

export const getToday = () => {
  const today = new Date().toLocaleDateString('ja-JP', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return today.replace(/\//g, '-');
};
