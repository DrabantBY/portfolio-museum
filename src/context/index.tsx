import { createContext } from 'react';
import { MenuBurgerType } from '../types';

export const MenuBurgerContext = createContext<MenuBurgerType>({
  isActive: false,
  setIsActive: () => false,
});
