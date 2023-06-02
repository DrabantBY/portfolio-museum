import { ReactComponent as YoutubeIcon } from '../../../assets/svg/footer/youtube.svg';
import { ReactComponent as InstagramIcon } from '../../../assets/svg/footer/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../../assets/svg/footer/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../../assets/svg/footer/twitter.svg';
import { ReactComponent as PinterestIcon } from '../../../assets/svg/footer/pinterest.svg';
import './styles.scss';

const SocialNet = () => {
  return (
    <ul className='social-list footer__social-list'>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.youtube.com/@MuseeLouvre'
          className='social-link footer__social-link'
        >
          <YoutubeIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.instagram.com/museelouvre/'
          className='social-link footer__social-link'
        >
          <InstagramIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.facebook.com/museedulouvre/'
          className='social-link footer__social-link'
        >
          <FacebookIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://twitter.com/MuseeLouvre'
          className='social-link footer__social-link'
        >
          <TwitterIcon />
        </a>
      </li>
      <li className='social-item footer__social-item'>
        <a
          href='https://www.pinterest.com/adriennelods/paris-louvre/'
          className='social-link footer__social-link'
        >
          <PinterestIcon />
        </a>
      </li>
    </ul>
  );
};

export default SocialNet;
