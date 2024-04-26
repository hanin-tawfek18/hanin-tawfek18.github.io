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

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
function filterFunction() {
  const input = document.getElementById("myInput");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("myDropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

  

