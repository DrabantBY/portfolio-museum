import { useContext } from 'react';
import { MenuBurgerContext } from '../../../assets/context';
import './styles.scss';

const MenuButton = () => {
  const { isActive, setIsActive } = useContext(MenuBurgerContext);

  return (
    <button
      type='button'
      className={`menu-btn${isActive ? ' active' : ''}`}
      onClick={() => setIsActive(!isActive)}
    >
      <span />
      {!isActive && <span />}
      <span />
    </button>
  );
};

export default MenuButton;
