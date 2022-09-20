import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { ToggleTheme, logo, logoFull, logoFullDark, profilePic } from '@/components';
import { Bell } from 'react-feather';
import Image from 'next/image';
import classNames from 'classnames';

interface NavButton {
  name: string;
  href: string;
  current: boolean;
}

interface NavProps {
  setLightTheme: Dispatch<SetStateAction<boolean>>;
  lightTheme: boolean;
}

const navButtons: NavButton[] = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
];

const conditionalButtonClasses = (button: NavButton): string => classNames('px-3 py-2 rounded-md text-sm font-medium', {
  'bg-sea-sky-500 text-sea-white-100 dark:bg-sea-blue-900 dark:text-sea-white-100':
      button.current,
  'text-sea-blue-300 hover:bg-sea-white-200 hover:text-sea-blue-900 dark:text-sea-white-400 dark:hover:bg-sea-blue-300 dark:hover:text-sea-white-100':
      !button.current,
});

export const Nav = ({ setLightTheme, lightTheme }: NavProps): ReactElement => {
  const [ mobileMenu, setMobileMenu ] = useState(false);

  return <>
    <div className="transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden text-sea-blue-300 hover:text-sea-blue-900 dark:text-sea-white-400 dark:hover:text-sea-white-100">
            <a href='#' className="h-8 w-8 flex items-center" onClick={() => setMobileMenu(!mobileMenu)}>
              <span className={classNames([ mobileMenu ? 'h-0 after:rotate-45 after:top-0 before:-bottom-0.5 before:-rotate-45' : 'h-0.5', 'bg-white rounded-full w-full absolute transition-all duration-100',
                'after:bg-white after:rounded-full after:h-0.5 after:w-full after:absolute after:transition-all after:duration-100 after:-top-2',
                'before:bg-white before:rounded-full before:h-0.5 before:w-full before:absolute before:-bottom-2' ])}></span>
            </a>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden h-8 w-auto">
                <Image src={logo} alt="logo" height="32px" width="35px" />
              </div>
              <div className="hidden lg:block h-8 w-auto dark:hidden">
                <Image src={logoFull} alt="full logo" objectFit='cover' width="143px" height="32px"  />
              </div>
              <div className="hidden dark:lg:block h-8 w-auto">
                <Image src={logoFullDark} alt="full logo"  width="143px" height="32px"/>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {navButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={conditionalButtonClasses(button)}
                    aria-current={button.current ? 'page' : undefined}
                  >
                    {button.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="hidden pr-4 sm:block">
              <ToggleTheme setLightTheme={setLightTheme} lightTheme={lightTheme}/>
            </div>
            <button
              type="button"
              className="p-1 text-sea-blue-300 focus:text-sea-blue-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sea-blue-500 focus:ring-sea-white-100 dark:bg-sea-blue-500 dark:text-sea-white-300 dark:focus:text-sea-white-100 transition-all duration-300"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="ml-3 relative">
              <button className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sea-blue-500 focus:ring-sea-white-100 dark:bg-sea-blue-500 transition-all duration-300">
                <span className="sr-only">Open user menu</span>
                <div className="h-8 w-8 rounded-full">
                  <Image
                    layout="fill"
                    src={profilePic}
                    alt="profile picture of user"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
};

