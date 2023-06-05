import { memo } from 'react';
import { Link } from 'react-scroll';
import classnames from 'classnames';
import { MENU } from '../../../constants';
import { ReactComponent as ArrowLinkIcon } from '../../../assets/svg/arrow-link.svg';
import { MenuPropsType } from '../../../types';
import './styles.scss';

const Menu: React.FC<MenuPropsType> = memo(
  ({ position, isBurger, isActive, setIsActive }) => {
    const burger = isBurger ? 'menu-burger' : 'menu';

    const classMenu = classnames(
      burger,
      `navigation__${burger}`,
      `${position}__${burger}`,
      { active: isActive }
    );

    const classItem = classnames(
      `${burger}-item`,
      `navigation__${burger}-item`,
      `${position}__${burger}-item`
    );

    const classLink = classnames(
      `${burger}-link`,
      `navigation__${burger}-link`,
      `${position}__${burger}-link`
    );

    return (
      <ul className={classMenu} onClick={(e) => e.preventDefault()}>
        {MENU.map((link) => (
          <li key={link} className={classItem}>
            <Link
              activeClass='active'
              spy={true}
              smooth={true}
              hashSpy={true}
              offset={-50}
              // duration={500}
              // delay={1000}
              isDynamic={true}
              className={classLink}
              to={link}
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
