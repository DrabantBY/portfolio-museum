import { memo } from 'react';
import { MENU } from '../../../constants';
import { ReactComponent as ArrowLinkIcon } from '../../../assets/svg/arrow-link.svg';
import { MenuPropsType } from '../../../types';
import './styles.scss';

const Menu: React.FC<MenuPropsType> = memo(
  ({ isBurger, isActive, setIsActive }) => {
    const burger = isBurger ? 'menu-burger' : 'menu';

    return (
      <ul
        className={`${burger} navigation__${burger} header__${burger}${
          isActive ? ' active' : ''
        }`}
        onClick={(e) => e.preventDefault()}
      >
        {MENU.map((link) => (
          <li
            key={link}
            className={`${burger}-item navigation__${burger}-item header__${burger}-item`}
          >
            <a
              className={`${burger}-link navigation__${burger}-link header__${burger}-link`}
              href={`#${link}`}
              onClick={() => setIsActive && setIsActive(false)}
            >
              {link}
              {isBurger && <ArrowLinkIcon />}
            </a>
          </li>
        ))}
      </ul>
    );
  }
);

export default Menu;
