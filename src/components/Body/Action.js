import { CHANGE_FILTER_TYPE, CHANGE_SEARCHFIELD} from './constants.js';
import fetchdata from "../../Backend/controller";

export const setFilter = (radio) => {
    console.log(radio)
    return {
        type: 'CHANGE_FILTER_TYPE',
        payload: radio
    }
}

export const fetchProduct = () => {
    return {
        type: 'SET_PRODUCT',
        payload: fetchdata(undefined, undefined)
    }
}

export const filterProduct = (priceFilter, ratingFilter) => {
    let getproduct = fetchdata(priceFilter, ratingFilter);
    return {
        type: 'FILTER_PRODUCT',
        payload: getproduct
    }
}

export const setSearchField = (text) => {
    console.log(text);
    return {
        type: CHANGE_SEARCHFIELD,
        payload:text
    }
}
