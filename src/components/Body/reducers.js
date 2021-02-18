import { CHANGE_FILTER_TYPE, SET_PRODUCT, FILTER_PRODUCT} from './constants.js';

const initialState = {
    searchFilter: null,
    priceFilter: null,
    ratingFilter: null,
    product: []
}

export const selectfilter = (state=initialState, action = {}) => {
    switch(action.type){
        case CHANGE_FILTER_TYPE:
            return Object.assign({}, state, { searchFilter: action.payload });
        case SET_PRODUCT:
        case FILTER_PRODUCT:
            return {
                ...state, 
                product: action.payload
            }

        default:
            return state;    
    }

}

