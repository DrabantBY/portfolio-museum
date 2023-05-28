import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MenuBurgerContext } from '../../../assets/context';
import { ReactComponent as LogoIcon } from '../../../assets/svg/logo.svg';
import './styles.scss';

export const Logo = () => {
  const { setIsActive } = useContext(MenuBurgerContext);

  return (
    <Link
      className='logo navigation__logo header__navigation-logo'
      to='/'
      onClick={() => setIsActive(false)}
    >
      <LogoIcon />
      louvre
    </Link>
  );
};

export default Logo;
