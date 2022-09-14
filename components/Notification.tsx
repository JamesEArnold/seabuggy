import { ReactElement, useEffect, useState } from 'react';
import { X } from 'react-feather';
import classNames from 'classnames';

interface NotificationProps {
  content: string,
  dismissTime: number,
}

export const Notification = ({
  content,
  dismissTime,
}: NotificationProps): ReactElement => {
  const [ showAlert, setShowAlert ] = useState(true);
  const [ slideOut, setSlideOut ] = useState(false);
  const animateNotificationAndDismiss = () => {
    setSlideOut(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  setTimeout(() => {
    if (showAlert === true) {
      setSlideOut(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 1000);
    }
  }, dismissTime);

  useEffect(() => {}, [ showAlert ]);

  return showAlert
    ? <div
      onClick={() => animateNotificationAndDismiss()}
      className={classNames([ slideOut ? 'animate-slideOutTop' : '', 'fixed left-0 right-0 w-80 sm:max-w-md sm:w-1/2 mx-auto flex space-x-2 justify-center cursor-pointer' ])}
    >
      <div
        className="bg-slate-100 shadow-lg mx-auto w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block"
        id="static-example"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-mdb-autohide="false"
      >
        <div
          className=" bg-slate-100 flex flex-row-reverse justify-between items-center py-px px-3 bg-clip-padding border-gray-200 rounded-t-lg"
        >
          <div
            className="flex flex-row-reverse"
          >
            <button
              type="button"
              className="btn-close w-1 h-1 mr-2 mt-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
              data-mdb-dismiss="toast"
              aria-label="Close"
              onClick={() => animateNotificationAndDismiss()}
            >
              <X
                className='h-5'
                onClick={() => animateNotificationAndDismiss()}
              />
            </button>
          </div>
        </div>
        <div className="bg-slate-100 shadow-lg flex flex-col items-center overflow-hidden rounded-xl">
          <div className="p-3 px-5 text-slate-500 mx-auto">
            {content}
          </div>
          <div className="flex before:content-[''] w-100 h-1 bg-blue-400 -translate-y-0 -translate-x-0 rounded-xl animate-loadingLine"></div>
        </div>
      </div>
    </div>
    : <></>;
};
