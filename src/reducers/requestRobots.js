import { FETCH_ROBOTS } from '../constants';

const intialState = {
    robots: []
};

export const requestRobots = (state=intialState, action={}) => {
    switch(action.type) {
        case FETCH_ROBOTS:
            return Object.assign({}, state, { robots: action.payload });
        default:
            return state;
    }
}