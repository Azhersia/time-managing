'use client'

import React, { useState, useEffect, useRef } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import { getData, onSubmit } from "@/utilities/handleDatabase";

const Timer = ({ projectId }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);
  const [timerRunning, setTimerRunning] = useState(false); // State to track timer status
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Start the interval if timerRunning is true
    if (timerRunning) {
      intervalIdRef.current = setInterval(() => {
        setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);

        if (seconds < 59) {
          setSeconds((prevSeconds) => prevSeconds + 1);
        } else {
          setSeconds(0);
          if (minutes < 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
          } else {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
          }
        }
      }, 1000);
    } else {
      // Clear the interval if timerRunning is false
      clearInterval(intervalIdRef.current);
    }

    // Clear the interval on component unmount
    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [timerRunning, seconds, minutes, hours]);

  const handleStart = () => {
    setTimerRunning(true);
    console.log("Timer started: " + projectId);


  };

  const handleStop = (projectId: any) => {
    setTimerRunning(false);
    console.log("Timer stopped: " + projectId);
  };

  return (
    <div>

      <h1 className="text-xl">Project id: {projectId}</h1>

      <div>Hours: {hours}</div>
      <div>Minutes: {minutes}</div>
      <div>Seconds: {seconds}</div>
      <div>Total Seconds: {totalSeconds}</div>

      <div className="flex justify-center items-center gap-4 mt-2">
        <form action={onSubmit}>
          <input type="hidden" name="totalSeconds" value={totalSeconds} />
          <input type="hidden" name="totalSeconds" value={totalSeconds} />
          <button
            onClick={handleStop}
            className="rounded-md w-10 h-10 bg-[#d64646] flex justify-center items-center text-[#d8e6d6] hover:cursor-pointer"
          >
            <p className="">
              <FaPause />
            </p>
          </button>
        </form>

        <button
          onClick={handleStart}
          className="rounded-full w-10 h-10 bg-[#58ee48] flex justify-center items-center text-[#d8e6d6] hover:cursor-pointer "
        >
          <p>
            <FaPlay />
          </p>
        </button>
      </div>
    </div>
  );
};

export default Timer;
// import React, { useState, useEffect, useRef } from "react";
// import { FaPause, FaPlay } from "react-icons/fa";
// import { getData, onSubmit } from "@/utilities/handleDatabase";

// async function getProjects() {
//   const res = await getData();
//   const projects = res;

//   const unfinishedProjects = projects.filter(project => !project.finished);
//   return projects;
// }

// const Timer = ({ projectId }) => {
//   const [totalSeconds, setTotalSeconds] = useState(0);
//   const [seconds, setSeconds] = useState(0);
//   const [minutes, setMinutes] = useState(0);
//   const [hours, setHours] = useState(0);
//   const [timerRunning, setTimerRunning] = useState(false); // State to track timer status
//   const intervalIdRef = useRef<NodeJS.Timeout | null>(null);

//   useEffect(() => {
//     // Start the interval if timerRunning is true
//     if (timerRunning) {
//       intervalIdRef.current = setInterval(() => {
//         setTotalSeconds((prevTotalSeconds) => prevTotalSeconds + 1);

//         if (seconds < 59) {
//           setSeconds((prevSeconds) => prevSeconds + 1);
//         } else {
//           setSeconds(0);
//           if (minutes < 59) {
//             setMinutes((prevMinutes) => prevMinutes + 1);
//           } else {
//             setMinutes(0);
//             setHours((prevHours) => prevHours + 1);
//           }
//         }
//       }, 1000);
//     } else {
//       clearInterval(intervalIdRef.current);
//     }

//     return () => {
//       if (intervalIdRef.current !== null) {
//         clearInterval(intervalIdRef.current);
//       }
//     };
//   }, [timerRunning, seconds, minutes, hours]);

//   const handleStart = () => {
//     setTimerRunning(true); // Start the timer
//     console.log("Timer started");
//   };

//   const handleStop = () => {
//     setTimerRunning(false); // Stop the timer
//     console.log("Timer stopped");

//   };

//   return (
//     <div className="flex justify-center items-center flex-col">
//       <h1 className="text-xl m-3">Project ID: {projectId}</h1>

//       <div>Hours: {hours}</div>
//       <div>Minutes: {minutes}</div>
//       <div>Seconds: {seconds}</div>
//       <div>Total Seconds: {totalSeconds}</div>

//       <div className="flex justify-center items-center gap-4 mt-2">
//         <form action={onSubmit}>

//           <input type="hidden" name="totalSeconds" value={totalSeconds} />
//           <input type="hidden" name="projectName" value={totalSeconds} />
//           <button
//             onClick={handleStop}
//             className="rounded-md w-10 h-10 bg-[#d64646] flex justify-center items-center text-[#d8e6d6] hover:cursor-pointer"
//           >
//             <p className="">
//               <FaPause />
//             </p>
//           </button>
//         </form>

//         <button
//           onClick={handleStart}
//           className="rounded-full w-10 h-10 bg-[#58ee48] flex justify-center items-center text-[#d8e6d6] hover:cursor-pointer "
//         >
//           <p>
//             <FaPlay />
//           </p>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Timer;