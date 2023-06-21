import useIntersection from '../../../hooks/useIntersection';
import classnames from 'classnames';
import './styles.scss';

const Image: React.FC<{ item: string }> = ({ item }) => {
  const { imageRef, isIntersection } = useIntersection();

  const classLi = classnames('gallery-item', 'section-gallery__gallery-item');
  const classImg = classnames(
    'gallery-image',
    'section-gallery__gallery-image',
    { active: isIntersection }
  );

  return (
    <li className={classLi}>
      <img ref={imageRef} className={classImg} src={item} alt='gallery image' />
    </li>
  );
};

export default Image;
