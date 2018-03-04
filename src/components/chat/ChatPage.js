import React from 'react';
import {Link} from 'react-router';
import {ChatContainer} from './ChatContainer';
import {ChatContainerCustomer} from './ChatContainerCustomer';
import {Chat} from './Chat';

class ChatPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { chat: []};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(msg) {
        let newChat = this.state.chat;
        newChat.push(msg);
        this.setState({ chat: newChat });
    }

    render() {
        let chatList = null;
        return (
            <div id="chatContainer">
                {chatList}
                <Chat onSubmit={this.handleSubmit}/>
            </div>
        );
    }
}

ChatPage.propTypes = {
    chat: React.PropTypes.array.isRequired,
};

export default ChatPage;