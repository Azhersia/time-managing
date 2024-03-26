import React, { createContext, useContext, useState, useEffect } from 'react';

const TimerContext = createContext();

export const TimerProvider = ({ children }) => {
  const [totalSeconds, setTotalSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TimerContext.Provider value={{ totalSeconds }}>
      {children}
    </TimerContext.Provider>
  );
};

export const useTimer = () => useContext(TimerContext);