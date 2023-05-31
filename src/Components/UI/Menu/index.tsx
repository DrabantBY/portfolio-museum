import { memo } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import { MENU } from '../../../constants';

import { ReactComponent as ArrowLinkIcon } from '../../../assets/svg/arrow-link.svg';
import { MenuPropsType } from '../../../types';
import './styles.scss';

const Menu: React.FC<MenuPropsType> = memo(
  ({ isBurger, isActive, setIsActive }) => {
    const burger = isBurger ? 'menu-burger' : 'menu';

    const classMenu = classnames(
      burger,
      `navigation__${burger}`,
      `header__${burger}`,
      { active: isActive }
    );

    const classItem = classnames(
      `${burger}-item`,
      `navigation__${burger}-item`,
      `header__${burger}-item`
    );

    const classLink = classnames(
      `${burger}-link`,
      `navigation__${burger}-link`,
      `header__${burger}-link`
    );

    return (
      <ul className={classMenu} onClick={(e) => e.preventDefault()}>
        {MENU.map((link) => (
          <li key={link} className={classItem}>
            <Link
              className={classLink}
              to={'/#' + link}
              onClick={() => setIsActive && setIsActive(false)}
            >
              {link}
              {isBurger && <ArrowLinkIcon />}
            </Link>
          </li>
        ))}
      </ul>
    );
  }
);

export default Menu;
