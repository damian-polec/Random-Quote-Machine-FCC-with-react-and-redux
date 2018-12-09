import React from 'react';
import Border from '../../assets/border.svg';

import './quoteBox.scss';

function QuoteBox(props) {
    return (
        <div id='quote-box'>
            <img className='Border' src={Border} />
        </div>
    )
}

export default QuoteBox
