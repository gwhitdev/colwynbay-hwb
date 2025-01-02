 // Set slide index to 1 for the first slide
 let slideIndex = 1;

 // Attach directional arrows in the DOM to variables
 const previousArrow = document.querySelector('#previousArrow');
 const nextArrow = document.querySelector('#nextArrow');

 // Add event listeners for when each of the directional arrows are clicked
 previousArrow.addEventListener('click', () => plusSides(-1));
 nextArrow.addEventListener('click', () => plusSides(1));

 // Arrow functions for moving the slides forwards and backwards
 const plusSides = n => showSlides(slideIndex += n);

 // Arrow function to load the slides and to show the first slide at load
 const showSlides = n => {
     let i;
     const slides = document.getElementsByClassName("slides");

     if (n > slides.length) slideIndex = 1;
     if (n < 1) slideIndex = slides.length;

     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     };
     
     // Set the slides divs to have a display value of flex rather than block to keep their layout correct
     slides[slideIndex - 1].style.display = "flex";
 }
 // Execute the showSlides arrow function to show carousel slides in the DOM
 showSlides();