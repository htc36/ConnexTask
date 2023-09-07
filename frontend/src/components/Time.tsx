import { useEffect, useState } from 'react';

interface TimeProps {
  systemTime: number | null;
}

export function Time(props: TimeProps) {
  const [currentTime, setCurrentTime] = useState(new Date().getTime());
  const apiTime = props.systemTime;
  const epochTime = apiTime ? (apiTime / 1000).toString() : '';
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().getTime());
    }, 1 * 1000); // in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='component time'>
      <p>Time from server: {epochTime} </p>
      <p>Time difference: {generateFormattedDifference(apiTime, currentTime)}</p>
    </div>
  );
}

function generateFormattedDifference(time1: number | null, time2: number | null) {
  if (!time1 || !time2) return '';
  const timeDifference = Math.abs(time1 - time2);
  const seconds = Math.abs(Math.floor(timeDifference / 1000));
  const minutes = Math.floor(seconds / 60) % 60;
  const hours = Math.floor(minutes / 60);
  return `${twoDigits(hours)}:${twoDigits(minutes)}:${twoDigits(seconds % 60)}`;
}
function twoDigits(num: number) {
  return `${num < 10 ? `0${num}` : num}`;
}
