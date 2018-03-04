import React from 'react';

export class BillRow2 extends React.Component {

    render() {
        return (
            <div className = "billRow2">

                <div className="column left" id="item">
                    <div className="row" id="itemRow" style={divStyle}>
                        <h3></h3>
                    </div>                 
                </div>

                <div className ="column middle" id="count">
                    <div className="row" id="countRow" style={divStyle}>
                        <h3></h3>
                    </div>
                </div>

                <div className="column right">
                    <div className ="row sub1" id="subtotal">
                        <h1>$0.00</h1>    
                    </div>
                    <div className ="row sub2">
                        <button className="tip" onClick="tip(0.10)">Tip 10%</button>
                        <button className="tip" onClick="tip(0.15)">Tip 15%</button>
                        <button className="tip" onClick="tip(0.20)">Tip 20%</button>
                        <button className="tip" onClick="tip(0)">No Tip </button>
                        <h3 id="final">Total:$0.00</h3>
                    </div>
                    <div className ="row sub3">
                        <button className="cash" onClick="paid()">CASH</button>
                        <button className="card" onClick="paid()">CARD</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

const divStyle = {
    display: 'none'
};