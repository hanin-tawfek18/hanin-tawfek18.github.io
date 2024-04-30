function openfunction(){
    document.getElementById('menu').style.width ='100%';
}
function closefunction(){
    document.getElementById('menu').style.width = '0%'
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
document.getElementById("checkoutForm").addEventListener("submit", function(event) {
  var emailInput = document.getElementById("emailInput");
  var email = emailInput.value;
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!emailPattern.test(email)) {
      // Email is not valid, show the alert
      document.getElementById("emailAlert").style.display = "block";
      event.preventDefault(); // Prevent form submission
  }
});