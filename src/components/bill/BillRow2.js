import React from 'react';

export class BillRow2 extends React.Component {

    render() {
        return (
            <div className = "billRow2">

                <div className="billColumn billLeft" >
                    <div className="billRow2"  style={divStyle}>
                        <h3></h3>
                    </div>                 
                </div>

                <div className ="billColumn middle" >
                    <div className="billRow2"  style={divStyle}>
                        <h3></h3>
                    </div>
                </div>

                <div className="billColumn right">
                    <div className ="billRow2 sub1" >
                        <h1>$0.00</h1>    
                    </div>
                    <div className ="billRow2 sub2">
                        <button className="tip" onClick={this.tip10}>Tip 10%</button>
                        <button className="tip" onClick={this.tip15}>Tip 15%</button>
                        <button className="tip" onClick={this.tip20}>Tip 20%</button>
                        <button className="tip" onClick={this.tip0}>No Tip </button>
                        <h3 >Total:$0.00</h3>
                    </div>
                    <div className ="billRow2 sub3">
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