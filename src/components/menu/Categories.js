import React from 'react';

export class Categories extends React.Component {

    changeCategory(type) {
        alert (type);
    }

    render() {
        return (
          <div className="left">
            <h2 className="category" onClick={() => this.changeCategory(0)}> Entrees </h2>
            <h2 className="category" onClick={() => this.changeCategory(1)}> Burgers </h2>
            <h2 className="category" onClick={() => this.changeCategory(2)}> Sides </h2>
            <h2 className="category" onClick={() => this.changeCategory(3)}> Drinks </h2>
            <h2 className="category" onClick={() => this.changeCategory(4)}> Desserts </h2>
            <div className="bill">
              <p id="totalBill"> Estimated bill: <br /> {this.props.bill} </p>
            </div>
          </div>
        );
    }
}

Categories.propTypes = {
    bill: React.PropTypes.number
};

Categories.defaultProps = { bill: "$0.00" };
/*
            <div className="row">
              <div className="left">
                <h2 className="category" onClick={() => this.changeCategory(0)}> Entrees </h2>
                <h2 className="category" onClick={() => this.changeCategory(1)}> Burgers </h2>
                <h2 className="category" onClick={() => this.changeCategory(2)}> Sides </h2>
                <h2 className="category" onClick={() => this.changeCategory(3)}> Drinks </h2>
                <h2 className="category" onClick={() => this.changeCategory(4)}> Desserts </h2>
                <div className="bill">
                  <p id="totalBill"> Estimated bill: <br /> {this.props.bill} </p>
                </div>
              </div>
            </div>
            */

/*
  <div class=table>
    <div class="row top">
      <div class=left>
        <h1 class=headers> Categories </h1>
      </div>
    </div>
    <div class=row>
      <div class=left>
        <h2 class=category onclick="changeCategory(0)"> Entrees </h2>
        <h2 class=category onclick="changeCategory(1)"> Burgers </h2>
        <h2 class=category onclick="changeCategory(2)"> Sides </h2>
        <h2 class=category onclick="changeCategory(3)"> Drinks </h2>
        <h2 class=category onclick="changeCategory(4)"> Desserts </h2>
        <div class="bill">
          <p id=totalBill> Estimated bill: <br> $0.00 </p>
        </div>
      </div>
*/