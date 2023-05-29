import useScrollAnimation from '../../../hooks/useScrollAnimation';
import classnames from 'classnames';
import './styles.scss';

const Image: React.FC<{ item: string }> = ({ item }) => {
  const { visible, imageRef } = useScrollAnimation();

  const classLi = classnames('gallery-item', 'section-gallery__gallery-item');
  const classImg = classnames(
    'gallery-image',
    'section-gallery__gallery-image',
    { active: visible }
  );

  return (
    <li className={classLi}>
      <img ref={imageRef} className={classImg} src={item} alt='gallery image' />
    </li>
  );
};

export default Image;
