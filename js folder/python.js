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

var i = 0;
function move() {
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width  + "%";
      }
    }
  }
}