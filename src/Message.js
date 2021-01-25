import React from 'react';

function Message(props) {
    return (
        <div key={props.key}>
            <p>{props.username}: {props.text}</p>
        </div>
    )
}

export default Message;
