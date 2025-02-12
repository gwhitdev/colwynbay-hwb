/** Set slide index to 1 for the first slide **/
const slideIndex = {"count": 1};
/** Attach directional arrows in the DOM to variables **/
const previousArrow = document.getElementById("previousArrow");
const nextArrow = document.getElementById("nextArrow");
/** Add event listeners for when each of the directional arrows are clicked **/
previousArrow.addEventListener("click", () => plusSides(-1));
nextArrow.addEventListener("click", () => plusSides(1));
/** Arrow functions for moving the slides forwards and backwards **/
const plusSides = n => showSlides(slideIndex.count += n);
/** Arrow function to load the slides and to show the first slide at load **/
const showSlides = n => {
    const slides = document.getElementsByClassName("slides");
    if (n > slides.length) slideIndex.count = 1;
    if (n < 1) slideIndex.count = slides.length;
    for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";
    }
slides[slideIndex.count - 1].style.display = "flex"; // Set the slides divs to have a display value of flex rather than block to keep their layout correct
}
 showSlides(); // Execute the showSlides arrow function to show carousel slides in the DOM