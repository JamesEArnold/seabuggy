import { ReactElement } from 'react';

export const Notification = (): ReactElement => (
  <div className="mx-10 mt-5">
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0 text-slate-500 mx-auto">
          Welcome to SeaBuggy! 🎉
      </div>
    </div>
  </div>
);
