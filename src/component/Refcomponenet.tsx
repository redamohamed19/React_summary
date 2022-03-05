import React, { useState, useRef } from 'react';

function Refcomponenet() {
  const x: any = useState('f');
  console.log(x.current.innerText);

  return (
    <p className="App" ref={x}>
      Hi
    </p>
  );
}

export default Refcomponenet;
