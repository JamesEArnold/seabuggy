export const ToggleTheme = (): JSX.Element => {
  return (
    <>
      <input type="checkbox" id="toggle-theme" className="hidden peer" />
      <label
        htmlFor="toggle-theme"
        className="w-10 h-6 rounded-full border-2 border-solid peer-checked:border-sea-sky-800 flex relative transition-all peer-checked:bg-sea-sky-400 dark:bg-sea-foam-blue-400 dark:border-sea-foam-blue-700
        peer-checked:before:animate-toggleTheme before:animate-toggleThemeReverse before:content-[''] before:w-5 before:h-5 before:border-2 before:border-solid peer-checked:before:border-yellow-400 peer-checked:before:bg-yellow-200 before:border-sea-white-300 before:bg-sea-white-100 peer-checked:before:left-0 before:left-4 before:relative before:rounded-full"
      >
        <span className="toggle--theme--label--background"></span>
      </label>
    </>
  );
};
