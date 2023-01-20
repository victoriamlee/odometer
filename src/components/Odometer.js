import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './../App.css';

const Odometer = (props) => {
  const { currentChargerOutput, totalChargerOutput } = props;

  return (
    <>
      <CircularProgressbarWithChildren 
        value={currentChargerOutput}
        maxValue={totalChargerOutput}
        circleRatio={0.65} // Make circle only 0.65 of the full diameter
        strokeWidth={12}
        styles={{
          trail: {
            strokeLinecap: "butt",
            transform: "rotate(-117deg)",
            transformOrigin: "center center",
            stroke: "#f4f5f4"
          },
          path: {
            strokeLinecap: "butt",
            transform: "rotate(-117deg)",
            transformOrigin: "center center",
            stroke: "#7cdbc7",
          }
        }}
      >
        <div className='odometer-label'>
          <div className='odometer-data'>
            {currentChargerOutput} A
          </div>
          <div className='odometer-data-text'>
            Current Charger Output
          </div>
        </div>
      </CircularProgressbarWithChildren>
      <div className='odemeter-min-max-label'>
        <div>
          0 A
        </div>
        <div>
          {totalChargerOutput} A
        </div>
      </div>
  </>
  );
}

export default Odometer;