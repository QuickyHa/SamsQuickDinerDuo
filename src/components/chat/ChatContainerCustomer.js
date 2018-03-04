import React from 'react';

export class ChatContainerCustomer extends React.Component{
    render(){
        return(
            <div className="container customer" style={divStyle} id="custChat">
                <p></p>
            </div>  
        );
    }
}

const divStyle ={
    display: 'none'
};