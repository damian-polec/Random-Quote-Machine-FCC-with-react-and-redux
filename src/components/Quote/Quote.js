import React from 'react'

const quote = (props) => {
    return (
        <div id='quote'>
            <p id='text'>{props.quote}</p>
            <p id='author'>Author: {props.author}</p>
        </div>
    )
}

export default quote
