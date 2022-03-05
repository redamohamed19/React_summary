import React, { useReducer } from 'react';

function reducer(state: any, action: any) {
  //reducer its like usestate but organise when we have multiple action about one state
  switch (action.type) {
    case 'increment':
      return { r: state.r + 50, g: state.g + 50, b: state.b + 50 };
    case 'decrement':
      return { r: state.r - 50, g: state.g - 50, b: state.b - 50 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });
  return (
    <>
      <h1 style={{ color: `rgb(${state.r}, ${state.g}, ${state.b})` }}>
        {' '}
        Total : {state.r}
      </h1>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}
export default Counter;
