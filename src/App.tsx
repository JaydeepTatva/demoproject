import React, { useState } from 'react';
import JourneyForm from './component/JourneyForm.tsx';
import JourneyResult from './component/JourneyResult.tsx';

const App: React.FC = () => {
  const [travelTime, setTravelTime] = useState<number | null>(null);
  const [travelDistance, setTravelDistance] = useState<number | null>(null);

  const handleCalculate = async (postcodes: string[]) => {
    const response = await fetch(`https://media.carecontrolsystems.co.uk/Travel/JourneyPlan.aspx?Route=${postcodes.join(',')}`);
    const data = await response.text();

    //Example Output 62, 67.7;
    const [time, distance] = data.split(',').map(item => parseFloat(item));

    if (!isNaN(time) && !isNaN(distance)) {
      setTravelTime(time);
      setTravelDistance(distance);
    } else {
      setTravelTime(null);
      setTravelDistance(null);
    }
  };

  return (
    <div>
      <h1>Journey Calculator</h1>
      <JourneyForm onCalculate={handleCalculate} />
      <JourneyResult travelTime={travelTime} travelDistance={travelDistance} />
    </div>
  );
};

export default App;
