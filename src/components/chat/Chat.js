import React from 'react';

export class Chat extends React.Component{
    message(){
        let msg = document.getElementById("msg").value;
        if (msg === "") return;
        document.getElementById("msg").value = "";
        let div;
        if (!test) {div = document.getElementById("custChat").cloneNode(true); test=true;}
        else {div = document.getElementById("servChat").cloneNode(true); test=false};
        div.style.display = 'block';
        div.children[0].innerHTML = msg;
        document.getElementById("chatContainer").appendChild(div);
    }
    render(){
        return(
            <div className = "chat">
                <form>
                    <input class="text" type="text" id="msg" placeholder="Type your message here"
                        onkeydown = "if (event.keyCode==13) { message(); return false; }"/>
                    <a className="reset" href="javascript:void(0)" onClick={message} id="send"> &#8594; </a>
                </form>
            </div>
        );
    }
}