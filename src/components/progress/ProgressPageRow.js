import React from 'react';

export class ProgressPageRow extends React.Component{
    render(){
        return (
            <div className= "progRow">
                <div>
                    <h2 className="prepping"> Lorem sed arcu posuere leo elit vulputate cras aenean neq suscipit dis ac Ipsum </h2>
                </div>
                <div>
                    <h2 className = "prepping"> Preparing your order
                        <button className="cancel"> &#128711; </button>
                    </h2>
                </div>
            </div> 
        );
    }
}