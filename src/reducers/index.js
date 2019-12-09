import { combineReducers } from 'redux';
import { searchRobots } from './searchRobots';
import { requestRobots } from './requestRobots';

export const reducers = combineReducers({
    searchRobots,
    requestRobots
});