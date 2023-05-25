import Menu from '../Menu';
import MenuButton from '../MenuButton';

const MenuBurger = () => {
  return (
    <>
      <MenuButton />
      <Menu isBurger={true} />
    </>
  );
};

export default MenuBurger;
