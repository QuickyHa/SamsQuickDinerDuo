import React from 'react';
import {Link} from 'react-router';
import {ChatContainer} from './ChatContainer';
import {ChatContainerCustomer} from './ChatContainerCustomer';
import {Chat} from './Chat';

class ChatPage extends React.Component {
    render() {
        return (
            <div id="chatContainer">
                <ChatContainer />
                <ChatContainerCustomer />
                <Chat />
            </div>
        );
    }
}


export default ChatPage;
