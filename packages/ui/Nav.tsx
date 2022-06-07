import { Menu, Bell } from 'react-feather';
import classNames from 'classnames';
import Image from 'next/image';
import profilePic from './resources/profilePictures/profile1.png';

interface NavButton {
  name: string;
  href: string;
  current: boolean;
}

const navButtons: NavButton[] = [
  { name: 'Dashboard', href: '#', current: true },
];

const conditionalButtonClasses = (button: NavButton) => {
  return classNames('px-3 py-2 rounded-md text-sm font-medium', {
    'bg-gray-900 text-white': button.current,
    'text-gray-300 hover:bg-gray-700 hover:text-white': !button.current,
  });
};

export const Nav = () => {
  return (
    <>
      <div className="bg-slate-800">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <Menu />
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {navButtons.map((button, index) => {
                    return (
                      <a
                        key={index}
                        href={button.href}
                        className={conditionalButtonClasses(button)}
                        aria-current={button.current ? 'page' : undefined}
                      >
                        {button.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <span className="sr-only">View notifications</span>
                <Bell className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="ml-3 relative">
                <button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
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
    </>
  );
};
