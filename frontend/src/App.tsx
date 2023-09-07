import './css/app.css';
import { Time } from './components/Time';
import { PrometheusMetrics } from './components/PrometheusMetrics';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface TimeServerResponse {
  data: {
    epoch: number;
  };
}
interface MetricsServerResponse {
  data: string;
}

function App() {
  const [apiTime, setApiTime] = useState<null | number>(null);
  const [apiMetrics, setApiMetrics] = useState<null | string>(null);

  function setApis() {
    axios
      .get('/metrics')
      .then((resp: MetricsServerResponse) => {
        setApiMetrics(resp.data);
      })
      .catch(() => {
        console.log('Error fetching metrics endpoint');
      });
    axios
      .get('/time')
      .then((resp: TimeServerResponse) => {
        setApiTime(resp.data.epoch);
      })
      .catch(() => {
        console.log('Error fetching time endpoint');
      });
  }

  useEffect(() => {
    setApis();
    const intervalId = setInterval(() => {
      setApis();
    }, 1000 * 20); // in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className='container'>
        <Time systemTime={apiTime}></Time>
        <PrometheusMetrics data={apiMetrics} />
      </div>
    </>
  );
}

export default App;
