import React from 'react';

export class ProgressPageRow extends React.Component{
    render(){
        let order = JSON.parse(this.props.item);
        let status;
        let statText;
        let statButton = "";
        switch (order.stat) {
            case 0:
                status = "prepping";
                statButton = <button className="cancel" onClick={this.props.onClick}> &times; </button>;
                statText = "Preparing your order ";
                break;
            case 1:
                status = "inProgress";
                statText = "Cooking your order";
                break;
            case 2:
                status = "done";
                statText = "Delivering your order";
                break;
            case 3:
                status = "delivered";
                statButton = <button className="pickup" onClick={this.props.onClick}> &#10004; </button>;
                statText = "Delievered (Call for plate pickup?) ";
                break;
            default:
                alert("Error with status");
        }
        return (
            <div className= "progRow">
                <div>
                    <h2 className={status}>{order.name}</h2>
                </div>
                <div>
                    <h2 className={status}>{statText}{statButton}</h2>
                </div>
            </div> 
        );
    }
}

ProgressPageRow.propTypes = {
    item: React.PropTypes.object.isRequired,
    onClick: React.PropTypes.func.isRequired
};