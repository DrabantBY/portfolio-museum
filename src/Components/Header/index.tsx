import Logo from '../UI/Logo';
import Menu from '../UI/Menu';
import MenuBurger from '../UI/MenuBurger';
import './styles.scss';

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__container'>
        <nav className='navigation header__navigation'>
          <Logo />
          <Menu isBurger={false} />
          <MenuBurger />
        </nav>
      </div>
    </header>
  );
};

export default Header;
