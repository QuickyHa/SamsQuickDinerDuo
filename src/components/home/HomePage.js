import React from 'react';


class HomePage extends React.Component {
    
    login() {
        window.location = "SecondPage.html";
        return;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="welcome">
                    <h1 className= "message">Woulasdsadsto dine here today?</h1>
                </div>	
                <div className="button">
                    <a href={this.login} className="button1">YES</a>
                </div>
            </div>
        );
    }
}

export default HomePage;





/*<!DOCTYPE html>

<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width" />
<link type=text/css rel="stylesheet" href="css/mainmenu.css">
<link type=text/css rel="stylesheet" href="css/menuBar.css">
<link type=text/css rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato"> <!-- solely used for font -->
<title> Home - Diner Duo </title>
<style> body{font-family: "Lato", sans-serif;} </style>
<script> 
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
</script>

<body>
  <div>
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
    </div>
</body>
</html>
*/