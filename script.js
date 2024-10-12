
document.addEventListener("DOMContentLoaded", function () {
  
    const form = document.querySelector("section.contact form");


    form.addEventListener("submit", function (event) {
    
        event.preventDefault();

       
        alert("Message sent successfully!");

      
        form.reset();
    });
});
