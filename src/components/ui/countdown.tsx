// "use client";
// import React, { useState } from "react";
// import { Calendar } from "./calendar";
// import { useEffect } from "react";

// export default function CountDown(){
//     const [days,setDays] = useState(0);
//     const [hours,setHours] = useState(0);
//     const [mins,setMins] = useState(0);
//     const [seconds,setSeconds] = useState(0);
//     const [counter,setCounter] = useState(0);

//    const CountdownTimer = () => {
//   const targetDate = new Date("2025-07-01T00:00:00");
// const [date, setDate] = useState(new Date());
//   const [timeLeft, setTimeLeft] = useState({
//     days: 0,
//     hours: 0,
//     minutes: 0,
//     seconds: 0,
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const now = new Date();
//       const diff = targetDate.getTime() - now.getTime();

//       if (diff <= 0) {
//         clearInterval(interval);
//         setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//       } else {
//         const days = Math.floor(diff / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
//         const minutes = Math.floor((diff / (1000 * 60)) % 60);
//         const seconds = Math.floor((diff / 1000) % 60);

//         setTimeLeft({ days, hours, minutes, seconds });
//       }
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [targetDate]);

   
//     return(
//        <>

//     <Calendar
//       mode="single"
//       defaultMonth={date}
//       numberOfMonths={2}
//       selected={date}
//       onSelect={setDate}
//       className="rounded-lg border shadow-sm"
//     />
  

//        {/* For TSX uncomment the commented types below */}
// <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
//   <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":15}  as React.CSSProperties  } aria-live="polite" aria-label={counter}>15</span>
//     </span>
//     days
//   </div>
//   <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":10}  as React.CSSProperties  } aria-live="polite" aria-label={counter}>10</span>
//     </span>
//     hours
//   </div>
//   <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":24}  as React.CSSProperties } aria-live="polite" aria-label={counter}>24</span>
//     </span>
//     min
//   </div>
//   <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
//     <span className="countdown font-mono text-5xl">
//       <span style={{"--value":59}  as React.CSSProperties } aria-live="polite" aria-label={counter}>59</span>
//     </span>
//     sec
//   </div>
// </div>
// </>
//     );
//   }