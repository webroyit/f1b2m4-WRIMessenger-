import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

import './Message.css';

function Message({ username, message, index }) {
    const isUser = username === message.username;

    return (
        <Card className={`message ${isUser ? 'message__user message__userCard' : 'message__guestCard'}`} key={index}>
            <CardContent>
                <Typography
                    color="white"
                    variant="h5"
                    component="h2"
                >
                    {message.username}: {message.text}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Message;
