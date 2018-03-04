import React from 'react';

export class Chat extends React.Component{
    message(){
    }
    render(){
        return(
            <div className = "chat">
                <form>
                    <input className="text" type="text" id="msg" placeholder="Type your message here"
                        onKeyDown = "if (event.keyCode==13) { message(); return false; }"/>
                    <a className="reset" href="javascript:void(0)" onClick={this.message} id="send"> &#8594; </a>
                </form>
            </div>
        );
    }
}