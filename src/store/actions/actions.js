import * as TYPES from '../constants/constants';

export const getAllItems = () => dispatch => {
    dispatch({type: TYPES.ITEMS_LOADING, payload: true});
     fetch('https://swapi.dev/api/people/').then(res => {
         if (res.status === 200) {
            return res.json();
         }
     }).then(res => {
         dispatch({type: TYPES.SAVE_ITEMS, payload: res.results})
     }).finally(() => {
         dispatch({type: TYPES.ITEMS_LOADING, payload: false})
     })
};

export const getUserById = id => dispatch => {
    dispatch({type: TYPES.ITEM_BY_ID_LOADING, payload: true});
    fetch(`https://swapi.dev/api/people/${id}`).then(res => {
        if (res.status === 200) {
            return res.json();
        }
    }).then(res => {
        dispatch({type: TYPES.SAVE_ITEM_BY_ID, payload: res})
    }).finally(() => {
        dispatch({type: TYPES.ITEM_BY_ID_LOADING, payload: false})
    })
};