function openfunction() {
    document.getElementById("menu").style.width = "200px";
  }
  function closefunction() {
    document.getElementById("menu").style.width = "0px";
  }
  alert("this site is using cookies");
  username = mariamyasser;
  document.cookie = "username=mariamyasser";
  function openfunction(){
    document.getElementById('menu').style.width ='100%';
}
function closefunction(){
    document.getElementById('menu').style.width = '0%'
}
function toggleDarkMode(){
  document.body.classList.toggle('dark-mode');
}
function toggleWhiteMode(){
  document.body.classList.toggle('white-mode');
}  