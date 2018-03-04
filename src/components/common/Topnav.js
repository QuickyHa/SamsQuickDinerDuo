import React from 'react';
import { SideNav } from './Sidenav';

export class TopNav extends React.Component {
    
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    render() {
        return (
            <div>
                <div text-decoration="none" className="topnav">
                    <a className="dropdown" href="javascript:void(0)" onClick={this.openNav}>&#9776;</a>
                </div>
                <SideNav />
            </div>
        );
    }
}


  /*<div>
    <div class=topnav>
        <a class=dropdown href="javascript:void(0)" onclick="openNav()">&#9776;</a>
    </div>
    <div class="buttons">
      <a href="foodmenu.html">MENU</a>
      <a href="ProgressPage.html">PROGRESS</a>
      <a href="BillPage.html">BILL</a>
    </div>
    <div class="chatbar">
      <a href="chatmockup.html">Chat</a>
    </div>
  </div>
  <div id="mySidenav" class="sidenav">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="SecondPage.html">Home</a>
      <a href="foodmenu.html">Menu</a>
      <a href="ProgressPage.html">Progress</a>
      <a href="BillPage.html">Bill</a>
    </div>*/