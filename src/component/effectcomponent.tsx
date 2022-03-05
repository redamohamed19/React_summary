import React, { useState, useEffect } from 'react';

function Effectcomponent() {
  const [time, Settime] = useState(new Date());

  useEffect(() => {
    console.log('empty');
  }); ////use effect without parametre  run the effect each time state change

  useEffect(() => {
    console.log('[]');
  }, []); //execute effect when first rerender only

  useEffect(() => {
    console.log('time');
  }, [time]); //execute effect when the time state change
  return (
    <div className="App">
      {time.toLocaleString()}

      <button
        onClick={() => {
          Settime(new Date());
        }}
      >
        Refresg
      </button>
    </div>
  );
}

export default Effectcomponent;
