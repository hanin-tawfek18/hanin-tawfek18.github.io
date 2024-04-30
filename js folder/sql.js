function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}
function openfunction(){
    document.getElementById('menu').style.width ='100%';
}
function closefunction(){
    document.getElementById('menu').style.width = '0%'
}
var icon =document.getElementById("icon");
icon.onclick=function(){
  document.body.classList.toggle("dark-theme");
}
