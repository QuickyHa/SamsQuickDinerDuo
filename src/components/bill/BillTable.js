import React from 'react';
import {BillRow1} from './BillRow1';
import {BillRow2} from './BillRow2';

export class BillTable extends React.Component {

    render() {
        return (
            <div className = "billTable">
                <BillRow1 />
            </div>
            
        );
    }
}