import { Nav, Notification } from 'ui';

export default function Web() {
  return (
    <div className="dark">
      <div className='min-h-screen bg-sea-white-100 dark:bg-sea-blue-500'>
        <Nav />
        <Notification />
      </div>
    </div>
  );
}
