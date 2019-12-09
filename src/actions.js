import { CHANGE_SEARCHFIELD, FETCH_ROBOTS } from './constants';
import jsonplaceholder from './api/jsonplaceholder';

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCHFIELD,
        payload: text
    }
} 

export const requestForRobots = () => async (dispatch) => {
    const response = await jsonplaceholder.get('/users');
    dispatch({ type: FETCH_ROBOTS, payload: response.data }); 
}