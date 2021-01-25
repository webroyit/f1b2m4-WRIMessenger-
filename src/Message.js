import React from 'react';

function Message(props) {
    return (
        <div key={props.key}>
            <p>{props.text}</p>
        </div>
    )
}

export default Message;
