import { Dispatch, ReactElement, SetStateAction, useState } from 'react';
import { ToggleTheme, logo, logoFull, logoFullDark, profilePic } from '@/components';
import { Bell } from 'react-feather';
import Image from 'next/image';
import { MobileMenu } from './MobileMenu';
import { MobileMenuButton } from './MobileMenuButton';
import { NavButton } from '@/types/index';
import classNames from 'classnames';

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
  const [ isMobileMenuOpen, setIsMobileMenuOpen ] = useState(false);

  return <>
    <div
      className="transition-all duration-500 bg-sea-white-100 dark:bg-sea-blue-500"
      data-cy="nav-container"
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <MobileMenuButton
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <div className="block lg:hidden h-8 w-auto">
                <Image src={logo} alt="logo" height="32px" width="35px" />
              </div>
              <div className="hidden lg:block h-8 w-auto dark:hidden">
                <Image src={logoFull} alt="Light Seabuggy logo" objectFit='cover' width="143px" height="32px"  data-cy="light-full-logo"/>
              </div>
              <div className="hidden dark:lg:block h-8 w-auto">
                <Image src={logoFullDark} alt="Dark Seabuggy logo"  width="143px" height="32px" data-cy="dark-full-logo"/>
              </div>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4" data-cy="nav-links">
                {navButtons.map((button, index) => (
                  <a
                    key={index}
                    href={button.href}
                    className={conditionalButtonClasses(button)}
                    aria-current={button.current ? 'page' : undefined}
                    data-cy={`nav-link-${button.name}`}
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
              data-cy="nav-notification"
              className="p-1 text-sea-blue-300 focus:text-sea-blue-500 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sea-blue-500 focus:ring-sea-white-100 dark:bg-sea-blue-500 dark:text-sea-white-300 dark:focus:text-sea-white-100 transition-all duration-300"
            >
              <span className="sr-only">View notifications</span>
              <Bell className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="ml-3 relative">
              <button
                data-cy="nav-user-profile"
                className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sea-blue-500 focus:ring-sea-white-100 dark:bg-sea-blue-500 transition-all duration-300"
              >
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
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        navButtons={navButtons}
      />
    </div>
  </>;
};

