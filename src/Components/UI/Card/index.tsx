import { Link } from 'react-router-dom';
import { handleTitle } from '../../../utils';
import './styles.scss';

const Card: React.FC<{ title: string; index: number }> = ({ title, index }) => {
  return (
    <li className='cards-item section-visiting__cards-item'>
      <Link
        className='cards-link section-visiting__cards-link'
        to={`/tours/${handleTitle(title)}`}
      >
        <figure>
          <img
            srcSet={`
                     visiting/visiting_280_${index + 1}.jpg 280w,
                     visiting/visiting_330_${index + 1}.jpg 330w,
                     visiting/visiting_440_${index + 1}.jpg 440w`}
            sizes='(max-width: 769px) 280px, (max-width: 1025px) 330px, 440px'
            src={`visiting/visiting_440_${index + 1}.jpg`}
            alt='tour'
          />
          <figcaption className='cards-title section-visiting__cards-title'>
            {title}
          </figcaption>
        </figure>
      </Link>
      <p className='cards-description section-visiting__cards-description'>
        360° virtual tour <span>google street panorama view</span>
      </p>
    </li>
  );
};

export default Card;
