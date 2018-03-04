import React from 'react';
import {BillItem} from './BillItem';
import {BillCount} from './BillCount';

export class BillRow2 extends React.Component {

    render() {
        let itemList = this.props.countedOrders.map((ord) => <div key={ord.name}><BillItem name={ord.name}/><BillCount count={ord.count}/></div>);
        return (
            <div className = "billRow2">
                {itemList}
                <div className="billColumn right">
                    <div className ="billRow2 sub1" >
                        <h1>${this.props.subtotal}</h1>    
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

BillRow2.propTypes = {
    subtotal: React.PropTypes.number,
    countedOrders: React.PropTypes.array
};

BillRow2.defaultProps = { subtotal: 0, countedOrders: []};