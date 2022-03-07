import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducer';
import counterReducer2 from './reducer2';

export default configureStore({
  reducer: {
    counter: counterReducer,
    counter2: counterReducer2
  }
});
