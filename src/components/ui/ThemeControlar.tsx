export function DayAndNight(){
   return (
       <label className="flex cursor-pointer gap-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="5" />
    <path
      d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
  </svg>
  <input type="checkbox" value="synthwave" className="toggle theme-controller" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
</label>
   );
}
export function ThemeController() {
    return (
        <div className="flex items-center gap-2">
            <label className="label">
                <span className="label-text">Theme</span>
            </label>
            <select className="select select-bordered w-full max-w-xs theme-controller">
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="cupcake">Cupcake</option>
                <option value="bumblebee">Bumblebee</option>
                <option value="emerald">Emerald</option>
                <option value="corporate">Corporate</option>
                <option value="synthwave">Synthwave</option>
                <option value="retro">Retro</option>
                <option value="cyberpunk">Cyberpunk</option>
                <option value="valentine">Valentine</option>
                <option value="halloween">Halloween</option>
                <option value="garden">Garden</option>
                <option value="forest">Forest</option>
                <option value="aqua">Aqua</option>
                <option value="lofi">Lofi</option>
                <option value="pastel">Pastel</option>
                <option value="fantasy">Fantasy</option>
            </select>
        </div>
    );
}
export function ThemeController2() {
    return (
        <div className="join join-vertical">
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Default"
    value="default" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Retro"
    value="retro" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Cyberpunk"
    value="cyberpunk" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Valentine"
    value="valentine" />
  <input
    type="radio"
    name="theme-buttons"
    className="btn theme-controller join-item"
    aria-label="Aqua"
    value="aqua" />
</div>
    );
}