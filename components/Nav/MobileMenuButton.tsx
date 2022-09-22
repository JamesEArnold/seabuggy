import { Dispatch, SetStateAction } from 'react';
import classNames from 'classnames';

interface MobileMenuButtonProps {
  isMobileMenuOpen: boolean
  setIsMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuButton = ({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: MobileMenuButtonProps) => <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
  <a href='#' className="h-8 w-8 pl-2 flex items-center" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
    <span className={classNames([ isMobileMenuOpen ? 'h-0 after:rotate-45 after:top-0 before:-bottom-0.5 before:-rotate-45' : 'h-0.5 after:-top-2 before:-bottom-2', 'dark:bg-sea-white-400 bg-sea-blue-300 rounded-full w-full absolute transition-all duration-100',
      'after:dark:bg-sea-white-400 after:bg-sea-blue-300 after:rounded-full after:h-0.5 after:w-full after:absolute after:transition-all after:duration-100',
      'before:dark:bg-sea-white-400 before:bg-sea-blue-300 before:rounded-full before:h-0.5 before:w-full before:absolute' ])}></span>
  </a>
</div>;
