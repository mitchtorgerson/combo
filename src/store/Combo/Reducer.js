import { Actions } from './Actions';
import { INITIAL_STATE } from './InitialState';

const ACTION_HANDLERS = {
    [Actions.GET_DATA_START]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.gettingData = true;
        return Object.assign({}, state, tempState);
    },

    [Actions.GET_DATA]: (state, action) => {
        const tempState = Object.assign({}, state);
        tempState.data = action.data;
        tempState.gettingData = false;
        return Object.assign({}, state, tempState);
    }
};

export default function reduce(state, action) {
    state = state || INITIAL_STATE;
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state;
}
