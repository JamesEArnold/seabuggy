import { useEffect, useState } from 'react';
import { NavButton } from '@/types/index';
import classNames from 'classnames';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  navButtons: NavButton[],
}

export const MobileMenu = ({
  isMobileMenuOpen,
  navButtons,
}: MobileMenuProps) => {
  const [ isExit, setIsExit ] = useState(false);
  const [ closeMenu, setCloseMenu ] = useState(false);

  useEffect(() => {
    let destroyTimer: ReturnType<typeof setTimeout>;
    setIsExit(!isExit);
    if (isMobileMenuOpen) {
      setCloseMenu(true);
    } else {
      destroyTimer = setTimeout(() => {
        setCloseMenu(false);
      }, 2000);
    }
    return () => clearTimeout(destroyTimer);
  }, [ isMobileMenuOpen ]);

  return closeMenu
    ? <div className={classNames([ isExit ? 'animate-slideMobileMenuOut' : 'animate-slideMobileMenuIn', 'transition-all duration-200 sm:hidden dark:bg-sea-blue-400 bg-slate-100 absolute table min-h-full min-w-full text-center z-10' ])}>
      <ul className="table-cell align-middle"
        data-cy="nav-mobile-menu">
        {navButtons.map((button, index) => (
          <li className="p-5" key={index}>
            <a
              href={button.href}
              className={'block text-2xl w-full text-slate-100 bg-sea-sky-500 dark:text-white dark:bg-sea-blue-600 space-x-4 p-4 rounded-full'}
              aria-current={button.current ? 'page' : undefined}
              data-cy={`nav-mobile-link-${button.name}`}
            >
              {button.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
    : <></>;
};
