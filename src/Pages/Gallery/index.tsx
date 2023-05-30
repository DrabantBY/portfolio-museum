import Section from '../Section';
import Image from '../../Components/UI/Image';
import { shuffleGallery } from '../../utils';
import './styles.scss';

const Gallery = () => {
  return (
    <Section sectionId='gallery'>
      <h2 className='section-title section-gallery__title'>art gallery</h2>
      <div className='gallery-wrapper section-gallery__gallery-wrapper'>
        <ul className='gallery-list section-gallery__gallery-list'>
          {shuffleGallery().map((item) => (
            <Image key={item} item={item} />
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Gallery;
