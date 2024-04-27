document.addEventListener("DOMContentLoaded", function () {
    var button = document.createElement("button");
    button.textContent = "Enroll now";

    document.body.appendChild(button);
    button.style.backgroundColor = "purple";
    button.style.color = "white";
    button.style.borderRadius = "10px";
    button.style.padding = "20px 30px";
    button.style.fontSize = "16px"; // Change text size
    button.style.fontFamily = "Monospace, sans-serif";
    button.style.cursor = "pointer";

    button.addEventListener("click", function () {
        window.location.href = "https://www.youtube.com/playlist?list=PLlxmoA0rQ-LwgK1JsnMsakYNACYGa1cjR";
        });

        var paragraph = document.getElementById("paragraph-id");
    
        paragraph.parentNode.insertBefore(button, paragraph.nextSibling);
  });
function openfunction(){
    document.getElementById('menu').style.width ='100%';
}
function closefunction(){
    document.getElementById('menu').style.width = '0%'
}

function toggleWhiteMode(){
  document.body.classList.toggle('white-mode');
}
