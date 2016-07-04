'use strict';
import {
  combineReducers
} from 'redux';
import pop from './pop';
import ask from './ask';

const rootReducer = combineReducers({
  pop,
  ask
});

export default rootReducer;
