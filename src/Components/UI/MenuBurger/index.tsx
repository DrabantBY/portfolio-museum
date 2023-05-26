import { useContext } from 'react';
import { createPortal } from 'react-dom';
import { MenuBurgerContext } from '../../../assets/context';
import Menu from '../Menu';

const MenuBurger = () => {
  const context = useContext(MenuBurgerContext);
  return createPortal(<Menu isBurger={true} {...context} />, document.body);
};

export default MenuBurger;
