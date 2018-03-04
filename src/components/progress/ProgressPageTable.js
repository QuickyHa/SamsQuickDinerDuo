import React from 'react';
import {ProgressPageRow} from './ProgressPageRow';

export class ProgressPageTable extends React.Component{
    render(){
        return(
            <div className = "progTable">
                <div className = "progRow progTop">
                    <div>
                        <h1 className = "headers"> Order </h1>
                    </div>
                    <div>
                        <h1 className = "headers"> Status </h1>
                    </div>
                </div>
                <ProgressPageRow />
                <ProgressPageRow />
                <ProgressPageRow />
                
            </div>
        );
    }
}
