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



  document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.hyper ol a');

    links.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        const href = this.getAttribute('href');
        
        // Check if href starts with '#'
        if (href && href.startsWith('#')) {
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);

          if (targetElement) {
            const yOffset = -70; // Adjust this value based on your header height
            const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;

            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        }
      });
    });
  });