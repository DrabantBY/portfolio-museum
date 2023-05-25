import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg';
import './styles.scss';

export const Logo = () => {
  return (
    <a className='logo navigation__logo header__navigation-logo' href='#'>
      <LogoIcon />
      louvre
    </a>
  );
};

export default Logo;
