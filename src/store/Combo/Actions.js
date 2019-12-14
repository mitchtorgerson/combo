import rest from '../utils/rest';

export const Actions = {
    GET_DATA_START: 'GET_DATA_START',
    GET_DATA: 'GET_DATA',
};

export function getData() {
    return dispatch => {
        const url = 'http://files.olo.com/pizzas.json';

        dispatch({type: Actions.GET_DATA_START});

        return rest.get(url).then(response => {
            dispatch({type: Actions.GET_DATA, data: response.data});
        })
    };
}
