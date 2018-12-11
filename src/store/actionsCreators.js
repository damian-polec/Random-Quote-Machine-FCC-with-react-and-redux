import * as actionTypes from './actionTypes';

export const setQuote = ( quoteData ) => {
    return {
        type: actionTypes.SET_QUOTE,
        quoteData: quoteData
    }
}

export const fetchQuote = () => {
    return dispatch => {
        const quoteText = document.getElementById('quote');
        quoteText.classList.add('action');
        fetch('https://talaikis.com/api/quotes/random/')
            .then(response => {
                return response.json()
            })
            .then(quoteData => {
                if(quoteData.quote.length > 160) {
                    dispatch(fetchQuote());
                } else {
                    return dispatch(setQuote(quoteData)) 
                }
            });
        quoteText.classList.remove('action');
    }
}