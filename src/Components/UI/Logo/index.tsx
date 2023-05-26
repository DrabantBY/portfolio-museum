import { useContext } from 'react';
import { MenuBurgerContext } from '../../../assets/context';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg';
import './styles.scss';

export const Logo = () => {
  const { setIsActive } = useContext(MenuBurgerContext);

  return (
    <a
      className='logo navigation__logo header__navigation-logo'
      href='#'
      onClick={() => setIsActive(false)}
    >
      <LogoIcon />
      louvre
    </a>
  );
};

export default Logo;
