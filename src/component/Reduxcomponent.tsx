import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, multipe } from '../Store/reducer';
import { IGstate } from '../interface';

const Reduxcomponent = () => {
  const count = useSelector((state: IGstate) => state.counter.value);
  const count2 = useSelector((state: IGstate) => state.counter2.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{count2}</p>
      <button onClick={() => dispatch(multipe())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Reduxcomponent;
