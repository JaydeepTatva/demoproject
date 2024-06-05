import React from 'react';

interface JourneyResultProps {
  travelTime: number | null;
  travelDistance: number | null;
}

const JourneyResult: React.FC<JourneyResultProps> = ({ travelTime, travelDistance }) => {
  return (
    <div>
        <>
          <div>Travel Time: {travelTime} minutes</div>
          <div>Travel Distance: {travelDistance} miles</div>
        </>
    </div>
  );
};

export default JourneyResult;