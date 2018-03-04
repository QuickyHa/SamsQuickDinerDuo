import React from 'react';
import {ProgressPageRow} from './ProgressPageRow';

let order = [
    {name: "Rare Steak", price: 4.00, stat: 0},
    {name: "Colored Water", price: 2.00, stat: 1},
    {name: "A Sandwich", price: 0.01, stat: 2},
    {name: "Canadian Burger", price: 100.00, stat: 3}
];

export class ProgressPageTable extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
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
                <ProgressPageRow item={JSON.stringify(order[0])}/>
                <ProgressPageRow item={JSON.stringify(order[1])}/>
                <ProgressPageRow item={JSON.stringify(order[2])}/>
                <ProgressPageRow item={JSON.stringify(order[3])}/>
            </div>
        );
    }
}
