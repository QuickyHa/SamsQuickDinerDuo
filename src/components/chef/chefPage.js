import React from 'react';
import {Link} from 'react-router';

class chefPage extends React.Component{
    render(){
        return(
            <div className = "wrapper">
                <div className = "order">
                    <div className = "frame">Number 3</div>
                    <button className="check">&#10004;</button>
                    <button className ="x">X</button>
                </div>
                <div className="order">
                        <div className="frame">Number 6</div>
                        <button className="check">&#10004;</button>
                        <button className ="x">X</button>
                    </div>
                <div className="order">
                    <div className="frame">Number 1</div>
                    <button className="check">&#10004;</button>
                    <button className ="x">X</button>
                </div>
            </div>
        );
    }
}