import React from 'react';
import {Link} from 'react-router';

class ChatPage extends React.Component {

    render() {
        return (
            <div className="welWrapper">
                <div className="welcome">
                    <h1 className="message">Would you like to dine here today?</h1>
                </div>	
                <div className="welButton">
                    <Link to="home" className="button1">YES</Link>
                </div>
            </div>
        );
    }
}

export default ChatPage;
