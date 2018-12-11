import React from 'react';

import './Button.scss';

const button = (props) => {
    return (
        <button className={props.classes} onClick={props.getQuote}>
            {props.children}
        </button>
    )
}

export default button;