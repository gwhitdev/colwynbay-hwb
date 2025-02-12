const navMenu = document.getElementById("menu"); // Get nav menu
const links = navMenu.getElementsByTagName("a"); // Get links by selected anchor tag within navMenu
const navToggle = document.getElementById("nav-toggle") // Get navToggle check box
const container = document.getElementById("container"); // Get container div
const listOfSections = document.getElementsByTagName("hr"); // Return the list of sections in the page to iterate over below
container.addEventListener("click", () =>  navToggle.checked === true ? navToggle.checked = false : ""); // Hide nav menu if user clicks on the web page when menu is open

// Loop through links and hide nav menu if checkbox is true
for (let link of links) {
    link.addEventListener("click", () => {
        navToggle.checked = false;
    });
}

function detectInView() {
    // Returns TRUE if a section tag is in the viewport
    // The isInViewPort function was written with help from StackOverflow regarding how to grab the top and bottom distance from the getBoundingClientRec function and apply that to some logic
    const isInViewPort = (section) => {
        const distance = section.getBoundingClientRect();
        //console.log(distance.bottom,window.innerHeight)
        //console.log(document.documentElement.clientHeight)
        return (
            
            distance.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    };
    // Loop through the list of sections and match against the list of links in the nav menu. If they match add an active class to the associated anchor tag in the menu
    for (let section = 0; section < listOfSections.length; section++) {
        const sectionToMatch = listOfSections[section]; // Assign the section to match with the target link below
        if (isInViewPort(sectionToMatch)) {
            for (let link = 0; link < links.length; link++) {
                const targetLinkText = links[link].href.split("#")[1]; // Assign specific anchor tag from the list of links in the nav menu
                const targetLink = links[link];
                targetLinkText === sectionToMatch.dataset.nav ? targetLink.classList.add("active") : targetLink.classList.remove("active");
            }
        }
    }
}
window.addEventListener("scroll", detectInView); // Listen to the scrolling event on the window object
detectInView(); // Execute straight away to detect where the    viewport is and highlight the correct anchor tag text in the nav menu