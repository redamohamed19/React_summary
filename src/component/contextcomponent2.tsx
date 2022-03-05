import React, { useState, useContext, createContext } from 'react';

const Globalcontext: any = createContext({ name: 'sidou', age: 25 }); //declare global component class that save all shared value

function Thirdlevel(): any {
  //second easy way to get data
  const x: any = useContext(Globalcontext);
  {
    return <div>Iam {x.name}</div>;
  }
}

function Secondlevel(): any {
  return (
    <div>
      <h1>Second level</h1>
      <Thirdlevel />
    </div>
  );
}

function Contextcomponent() {
  const [status, Setstatus] = useState({ name: 'reda', age: 25 });
  //provide variable from first level
  return (
    <Globalcontext.Provider value={status}>
      <div>
        <h1>First level</h1>
        <button onClick={() => {}}>incremente</button>
        <Secondlevel />
      </div>
    </Globalcontext.Provider>
  );
}

export default Contextcomponent;
