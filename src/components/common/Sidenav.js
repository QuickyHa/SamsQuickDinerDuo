import React from 'react';

export class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = { width: "0px" };
        this.closeNav = this.closeNav.bind(this);
    }

    closeNav() {
        this.setState({ width: "0px" });
    }

    render() {
        return (
            <div style={{width: this.state.width}} className="sidenav">
                <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
                <a href="SecondPage.html">Home</a>
                <a href="foodmenu.html">Menu</a>
                <a href="ProgressPage.html">Progress</a>
                <a href="BillPage.html">Bill</a>
            </div>
        );
    }
}



/*
  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="SecondPage.html">Home</a>
      <a href="foodmenu.html">Menu</a>
      <a href="ProgressPage.html">Progress</a>
      <a href="BillPage.html">Bill</a>
    </div>
*/