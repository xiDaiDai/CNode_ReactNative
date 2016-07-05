'use strict';
import {
  combineReducers
} from 'redux';
import pop from './pop';
import ask from './ask';
import share from './share';
import job from './job';
import detail from './detail';
import user from './user';

const rootReducer = combineReducers({
  pop,
  ask,
  share,
  job,
  detail,
  user
});

export default rootReducer;
