import Image from "next/image";
export function DifferenceSlider() {
    return (
        <figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <div className="bg-primary text-primary-content grid place-content-center text-9xl font-black">
      DAISY
    </div>
  </div>
  <div className="diff-item-2" role="img">
    <div className="bg-base-200 grid place-content-center text-9xl font-black">DAISY</div>
  </div>
  <div className="diff-resizer"></div>
</figure>
    );
}
export function DifferenceSlider2() {
    return (
        <figure className="diff aspect-16/9" tabIndex={0}>
  <div className="diff-item-1" role="img" tabIndex={0}>
    <Image alt="daisy" src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp" />
  </div>
  <div className="diff-item-2" role="img">
    <Image
      alt="daisy"
      src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp" />
  </div>
  <div className="diff-resizer"></div>
</figure>
    );
}