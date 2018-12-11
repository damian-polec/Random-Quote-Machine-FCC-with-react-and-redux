import * as actionTypes from './actionTypes';


const initialState = {
    quote: '',
    author: ''
}

const reducer = ( state = initialState , action) => {
    switch(action.type) {
        case actionTypes.SET_QUOTE:
            return {
                ...state,
                quote: action.quoteData.quote,
                author: action.quoteData.author
            }
        default:
            return state;
    }
}

export default reducer;