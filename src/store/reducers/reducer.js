import * as TYPES from '../constants/constants';

const initialState = {
    itemsList: [],
    itemsLoading: true,
    itemById: null,
    itemByIdLoading: true,
}

const item = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.ITEM_BY_ID_LOADING:
            return {...state, itemByIdLoading: action.payload};
        case TYPES.ITEMS_LOADING:
            return {...state, itemsLoading: action.payload};
        case TYPES.SAVE_ITEMS:
            return {...state, itemsList: action.payload};
        case TYPES.SAVE_ITEM_BY_ID:
            return {...state, itemById: action.payload};
        default:
            return {...state}
    }
}

export default item;