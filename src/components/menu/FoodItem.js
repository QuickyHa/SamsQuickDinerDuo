import React from 'react';

export class FoodItem extends React.Component {

    render() {
        return (
            <div className="column">
                <div className="food">
                    <div>Rare Steak</div>
                    <div className="img entree"></div>
                    <div className="bar">
                        <div className="num"> 0 </div>
                        <button className="minus"> - </button>
                        <button className="plus"> + </button>
                        <div className="price" > $4.00 </div>
                        <button className="confirm"> &#10004; </button>
                    </div>
                </div>
            </div>
        );
    }
}





/*
    <div class="column">
          <div class="food" id=food0>
              <div id=name0>Rare Steak</div>
              <div class="img entree" id=img0></div>
              <div class=bar>
                <div class=num id=count0> 0 </div>
                <button class=minus onclick="minus(0)"> - </button>
                <button class=plus onclick="plus(0)"> + </button>
                <div class=price id=price0> $4.00 </div>
                <button class=confirm onclick="addToOrder(0)"> &#10004; </button>
              </div>
          </div>
      </div>
*/