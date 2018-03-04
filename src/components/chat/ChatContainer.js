import React from 'react';

export class ChatContainer extends React.Component{
    render(){
        return(
            <div className="container" style={divStyle} id="servChat">
                <p></p>
            </div>  
        );
    }
}

const divStyle ={
    display: 'none'
};