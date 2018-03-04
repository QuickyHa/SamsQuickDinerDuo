import React from 'react';

export class BillRow1 extends React.Component {

    render() {
        return (
            <div className = "billRow1">
                <div className="column left">
                    <h2>Menu Item</h2>
                </div>
                <div className ="column middle">
                    <h2>Quantity</h2>
                </div>
                <div className="column right">
                    <h2>Subtotal</h2>
                </div>
            </div>
            
        );
    }
}