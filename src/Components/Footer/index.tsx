import Logo from '../UI/Logo';
import { ReactComponent as RsLogo } from '../../assets/svg/footer/rs-logo.svg';
import { ReactComponent as GithubLogo } from '../../assets/svg/footer/github-logo.svg';
import './styles.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__container'>
        <div className='footer__body'>
          <Logo />
        </div>
      </div>

      <hr />

      <div className='container footer__container'>
        <ul className='author footer__author'>
          <li className=' copyright footer__copyright'>©&nbsp;2023</li>
          <li className='rss footer__rss'>
            <a
              href='https://rollingscopes.com/'
              className='rss-link footer__rss-link'
              target='_blank'
            >
              <RsLogo />
            </a>
          </li>

          <li className='github footer__github'>
            <a
              href='https://github.com/DrabantBY'
              className='github-link footer__github-link'
              target='_blank'
            >
              <GithubLogo /> DrabantBY
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
