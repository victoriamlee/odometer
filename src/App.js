import './App.css';
import Odometer from './components/Odometer';
import { useEffect, useState } from 'react';

function App() {
  const [currentChargerOutput, setCurrentChargerOutput] = useState(0);
  const [totalChargerOutput, settotalChargerOutput] = useState(0);

  // data
  const chargingData = {
    current: 640,
    max: 3520
  };

  useEffect(() => {
    // simulate an api call
    const fetchData = (data) => {
      setCurrentChargerOutput(data.current);
      settotalChargerOutput(data.max);
    };

    fetchData(chargingData);

    // if data will updated every 5 seconds
    // const interval = setInterval(() => {
    //   fetchData(chargingData);
    // }, 5*1000);

    // clear interval when component unmounts
    // return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1 className='heading'>Current</h1>
      <div className='odometer'>
        <Odometer 
          currentChargerOutput={currentChargerOutput}
          totalChargerOutput={totalChargerOutput} 
        />
      </div>
    </div>
  );
}

export default App;
