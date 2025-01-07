const navMenu = document.getElementById("menu"); // Get nav menu
const links = navMenu.getElementsByTagName('a'); // Get links by selected anchor tag within navMenu
const navToggle = document.getElementById('nav-toggle') // Get navToggle check box
const container = document.getElementById('container'); // Get container div
// Loop through links and hide nav menu if checkbox is true
for (let link of links) link.addEventListener('click', () => navToggle.checked = false);
// Hide nav menu if user clicks on the web page when menu is open
container.addEventListener('click', () =>  navToggle.checked === true ? navToggle.checked = false : '');