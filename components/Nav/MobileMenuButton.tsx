import classNames from 'classnames';
import { useState } from 'react';

export const MobileMenuButton = () => {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  return <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
    <a href='#' className="h-8 w-8 flex items-center" onClick={() => setMobileMenu(!mobileMenu)}>
      <span className={classNames([ mobileMenu ? 'h-0 after:rotate-45 after:top-0 before:-bottom-0.5 before:-rotate-45' : 'h-0.5 after:-top-2 before:-bottom-2', 'dark:bg-sea-white-400 bg-sea-blue-300 rounded-full w-full absolute transition-all duration-100',
        'after:dark:bg-sea-white-400 after:bg-sea-blue-300 after:rounded-full after:h-0.5 after:w-full after:absolute after:transition-all after:duration-100',
        'before:dark:bg-sea-white-400 before:bg-sea-blue-300 before:rounded-full before:h-0.5 before:w-full before:absolute' ])}></span>
    </a>
  </div>;
};
