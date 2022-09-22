/* eslint-disable no-unused-vars */
import { NavButton } from '@/types/index';

interface MobileMenuProps {
  isMobileMenuOpen: boolean;
  navButtons: NavButton[],
  conditionalButtonClasses: (button: NavButton) => string,
}

export const MobileMenu = ({
  isMobileMenuOpen,
  navButtons,
}: MobileMenuProps) => (isMobileMenuOpen
  ? <div className="sm:hidden dark:bg-sea-blue-400 bg-slate-100 absolute table min-h-full min-w-full text-center">
    <ul className="table-cell align-middle">
      {navButtons.map((button, index) => (
        <li className="p-5" key={index}>
          <a
            href={button.href}
            className={'block text-2xl w-full text-slate-100 bg-sea-sky-500 dark:text-white dark:bg-sea-blue-600 space-x-4 p-4 rounded-full'}
            aria-current={button.current ? 'page' : undefined}
          >
            {button.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
  : <></>);
