export function Divider() {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="divider">Default</div>
            <div className="divider divider-horizontal">Horizontal</div>
            <div className="divider divider-vertical">Vertical</div>
            <div className="divider divider-start">Start</div>
            <div className="divider divider-end">End</div>
            <div className="divider divider-horizontal divider-start">Start</div>
            <div className="divider divider-horizontal">Default</div>
            <div className="divider divider-horizontal divider-end">End</div>
        </div>
    );
}
export function DividerHorizontal() {
    return (
        <div className="flex w-full">
            <div className="divider divider-horizontal"></div>
            <div className="divider divider-horizontal"></div>
            <div className="divider divider-horizontal"></div>
        </div>
    );
}
export function DividerVertical() {
    return (
        <div className="flex w-full">
            <div className="divider divider-vertical">Default</div>
            <div className="divider divider-vertical">Horizontal</div>
            <div className="divider divider-vertical">Vertical</div>
        </div>
    );    
}
export function DividerStartEndMiddle() {
    return(
<div className="flex w-full">
  <div className="divider divider-horizontal divider-start">Start</div>
  <div className="divider divider-horizontal">Default</div>
  <div className="divider divider-horizontal divider-end">End</div>
</div>
    );
}