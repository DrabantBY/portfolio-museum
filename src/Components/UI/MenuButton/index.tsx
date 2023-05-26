import { useContext } from 'react';
import classnames from 'classnames';
import { MenuBurgerContext } from '../../../assets/context';
import './styles.scss';

const MenuButton = () => {
  const { isActive, setIsActive } = useContext(MenuBurgerContext);

  const classMenuBtn = classnames('menu-btn', { active: isActive });

  return (
    <button
      type='button'
      className={classMenuBtn}
      onClick={() => setIsActive(!isActive)}
    >
      <span />
      {!isActive && <span />}
      <span />
    </button>
  );
};

export default MenuButton;
