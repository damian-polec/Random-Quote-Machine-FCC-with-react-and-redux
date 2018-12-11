import React from 'react';
import Quote from '../Quote/Quote';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import './quoteBox.scss';

function QuoteBox(props) {
    return (
        <div id='quote-box'>
            <Quote quote={props.quoteText} author={props.quoteAuthor}/>    
            <Button classes='Button Quote' id='new-quote' getQuote={props.getQuote}><a href='#' id='new-quote' ><FontAwesomeIcon icon='quote-right' /></a></Button>
            <Button classes='Button Twitter' id='tweet-quote'><a rel='noopener noreferrer' target='_blank' href={`https://twitter.com/intent/tweet?text=${props.quoteText}`} id='tweet-quote'><FontAwesomeIcon icon={['fab', 'twitter']} /></a></Button>        
        </div>
    )
}

export default QuoteBox
