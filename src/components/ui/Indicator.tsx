import Image from "next/image";

export function Indicator1() {
    return (
        <div className="indicator">
            <span className="indicator-item badge badge-secondary">New</span>
            <button className="btn btn-primary">Notifications</button>
        </div>
    );
}
export function Indicator2() {
    return(
        <div className="indicator">
  <span className="indicator-item status status-success"></span>
  <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
    );
}
export function Indicator3() {
    return (
        <div className="indicator">
  <span className="indicator-item badge badge-primary">New</span>
  <div className="bg-base-300 grid h-32 w-32 place-items-center">content</div>
</div>
    );
}
export function Indicator4() {
    return (
        <div className="indicator">
  <span className="indicator-item badge badge-secondary">12</span>
  <button className="btn">inbox</button>
</div>
    );
}
export function IndicatorAvatar() {
    return (
        <div className="avatar indicator">
  <span className="indicator-item badge badge-secondary">Justice</span>
  <div className="h-20 w-20 rounded-lg">
    <Image
      alt="Tailwind CSS examples"
      src="https://img.daisyui.com/images/profile/demo/batperson@192.webp"
    />
  </div>
</div>
    );
}
export function Indicatorinput() {
    return (
        <div className="indicator">
  <span className="indicator-item badge">Required</span>
  <input type="text" placeholder="Your email address" className="input input-bordered" />
</div>
    );
}
