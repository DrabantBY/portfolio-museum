import { useState } from 'react';
import { MenuBurgerContext } from '../../context';
import Logo from '../UI/Logo';
import Menu from '../UI/Menu';
import MenuBurger from '../UI/MenuBurger';
import MenuButton from '../UI/MenuButton';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <MenuBurgerContext.Provider value={{ isActive, setIsActive }}>
      <nav className='navigation header__navigation'>
        <Logo />
        <Menu />
        <MenuBurger />
        <MenuButton />
      </nav>
    </MenuBurgerContext.Provider>
  );
};

export default Navbar;
