# **Colwyn Bay Hwb**
## **Site Overview**
The Colwyn Bay Community Hwb and Foodbank is a new community space open 7 days a week, 52 days a year. It is a project in its early stages but has already made progress in developing services and opportunities for local people. However, as with most new ventures, publicity can be difficult to achieve - especially with limited charitable resources available. This website serves as a source of key information for current and new users of the Hwb. It is intended to be a well designed and easy to use lightweight publicity platform and portal.

![Am I responsive screenshot](docs/screenshots/am-i-responsive.png)

## Table of contents:
1. [**Site Overview**](#site-overview)
1. [**Planning stage**](#planning-stage)
    * [***Target Audiences***](#target-audiences)
    * [***User Stories***](#user-stories)
    * [***Site Aims***](#site-aims)
    * [***How Is This Will Be Achieved:***](#how-is-this-will-be-achieved)
    * [***Wireframes***](#wireframes)
    * [***Colour Scheme***](#Colour-scheme)
1. [**Current Features Common to all pages**](#current-features-common-to-all-pages)
1. [**Future-Enhancements**](#future-enhancements)
1. [**Testing Phase**](#testing-phase)
1. [**Deployment**](#deployment)
1. [**Credits**](#credits)
    * [**Honorable mentions**](#honorable-mentions)
    * [**General reference**](#general-reference)
    * [**Content**](#content)
    * [**Media**](#media)

## **Planning stage**
### **Target Audiences:**
- People who want to discover general information about the Hwb.
- People who want to find out how to donate to the organisation.
- People who want to make use of the Hwb's foodbank.
- People who need to hire a room.
- People who want to find out what events are coming up or which groups are in regular attendance at the Hwb.

### **User Stories:**
- As a general user of the Hwb's website, I want the website to be easy to navigate, so that I can find the information that I want quickly.
- As someone who hasn't visited the Hwb before, I want to feel that I know more about the Hwb after leaving the website than I did before visiting, so that I can visit the Hwb in person and know when it is open.
- As someone who needs to use the foodbank, I need to know where it is and its opening times, so that I can access it.
- As an event organiser, I want to know basic information about room hire, so that I can make a decision about making a booking.
- As a general user of the Hwb's website, I want to be able to easily contact the Hwb from the website, so that I can enquire about the Hwb's variety of services.
- As an event attendee, I want to learn about upcoming events, so that I can decide if I want to attend.
- As a potential donor, I want to be able to learn how the Hwb accepts donations, so that I can decide how to donate.
  
### **Site Aims:**
- To inform people about the Hwb's aims and purpose.
- To inform people about the Hwb's services and how they can visit.
- To provide details about donating.
- To provide a method of communication with the Hwb.
- To provide event and group organisers with a means of publicising their events and groups.

### **How this will be achieved:**
- The home page provides users with a brief introduction to the Hwb, the opening times and the location.
- The home page contains the latest news section and information on how to use the foodbank and donate, as well as the contact form.
- There is a sticky navigation bar that provides access to the remaining pages.
- A link to the Hwb's social media account is in the footer.
- There is a page that provides basic details about upcoming events and regular group bookings. There is a section in this page that provides information regarding room hire and a link to the contact page to enquire.

### **Wireframes:**
To help provide design consistency and to ensure a more streamlined approach to development, I've created two sets of wireframes: one for desktop and another for mobile. Links to each of the wireframes can be found below.
To improve the user experience (UX), there have been some changes to the design after the wireframes were created.
- The form's _thank you_ page is now a modal - this means less tab switching/page navigation.
- The main textual content is now left-aligned rather than center align - this gives a better visual appearance and improves readability.
- The 404 page no longer uses the header/footer layout but presents a cleaner display of the error and the way back home.
- There has also been some minor changes to some of the subsection placements to aid responsiveness.

* Mobile Wireframes:
    * [Landing Page](docs/wireframes/resized/mobile-landing-page.png)
    * [Error 404 Page](docs/wireframes/mobile-404-page.png)
    * [Contact Thank You Page](docs/wireframes/mobile-contact-thankyou-page.png)
    * [Events and Group Details Page](docs/wireframes/mobile-events-groups-details-page.png)


* Desktop wireframes:
    * [Home Page](docs/wireframes/desktop-landing-page.png)
    * [Error 404 Page](docs/wireframes/desktop-404-page.png)
    * [Contact Thank You Page](docs/wireframes/desktop-contact-thankyou-page.png)
    * [Events and Group Details Page](docs/wireframes/desktop-events-groups-details-page.png)


### **Colour Scheme:**
I chose hues of purple and orange based on some of the colours found within the Hwb's logo. Black and white text complement these colours. When using Google Dev Tools' Lighthouse feature I discovered that the text/background colour contrast was too low with the chosen purple hue so I used a [suggested tool](https://dequeuniversity.com/rules/axe/4.10/color-contrast) to adjust the contrast ratio. This means that the purple deviates from the original selection (#936FAC). The value found in the CSS styles is now #77528E.
The logo doesn't lend itself well to being used within the typical navigation bar so I've opted for a cleaner logotype text instead.
#### Original Logo
![Hwb Logo](assets/images/hwb_logo.webp)

![Colour contrast grid](docs/screenshots/contrast-grid-v2.png "Colour contrast grid") 

## **Structure**
###  **Header Element**
The header element floats at the top of the page so that the menu is always accessible to the user.
#### *Logotype Text and Home Link:*
![Header title](docs/screenshots/header1.png)

The title provides a handy reminder of the site that the user is visiting as well as a helpful 'back home' link to the landing page.

#### *Navigation Bar:*
![Header Nav Bar](docs/screenshots/header-navbar.png)

The nav bar provides the user with links to each of the main sections on the landing page and the events/groups page. 
The links provide feedback and become bold when the user brings one of these sections into the view of the browser window.
***
### **Hero Images**
There is only one hero image. This helps create a sense of uniformity in the pages that the user visits, reducing distractions from the page contents.
The image is that of the Colwyn Bay coast where the Hwb is located and has been borrowed from the tourism website, NorthWales.com.
The image is responsive across the various standard viewport sizes and stays consistent across each.

The page title rests on top of this hero image - it is bright and clear.

![Hero Image](docs/screenshots/hero-image-shot.png)

### **Pages and Sections**:
There are currently two pages: the landing (home) page and an Events and Regular Groups page.

Each page is split into logical sections of information. They are each given a background colour that switches between
an orange and a purple depending on their position in the pattern.
Each section is split with a horizontal rule that also acts as an anchor point for navigation, making each section of information
clearer for the user.


![Colourful sections](docs/screenshots/section-colours.png)

### **Footer**
![Footer](docs/screenshots/footer.png)

This footer is present on each page. There's an imprint from the designer/developer. There is a social link to the Hwb's
Facebook page for users who are on Facebook. The footer's background matches that of the purple found in the overall theme. It is intended
that the footer would match the background colour of the final section for each page.

## Features

### **Anchor tags within main content**
Anchor tags have been left with the underline text decoration to facilitate users finding appropriate links.
The anchor text colour is to match the specific theme of the particular section or area of a page that the anchor sits within.
For example, in a section with a purple background the anchor text will match with the white colour text. If the section is orange, 
the anchor text will match the deep purple text colour.

### **Landing Page:**
The landing page contains the following sections:
- Welcome including Opening Times and location
- A carousel of images
- Latest News
- Foodbank information
- Donations information
- A contact form with modal

#### *Welcome*
The Welcome section provides basic information about the Hwb along with opening times and the Hwb's location.

![Welcome section](docs/screenshots/welcome.png 'Welcome section')

#### *Carousel*
The image carousel showcases to the user some of the events and activities that take plan around the Hwb. The carousel is operated
by using the 'left' and 'right' arrow buttons located either side of the carousel feature.

![Carousel](docs/screenshots/carousel.png 'Carousel')

#### *Latest News*
The Latest News section provides the user with important and exciting updates that the Hwb and its people would like to share.
The news is presented in a card format. The cards are responsive for different viewport sizes and presents more or less
cards to fit the screen.

![Latest News section](docs/screenshots/latest-news.png 'Latest News')

#### *Foodbank information*
The Foodbank section gives general information to the user about how to access the foodbank and signposts the user to 
the contact form for further information or questions.

![Foodank information](docs/screenshots/foodbank.png 'Foodbank information')

#### *Donations information*
The donations section presents high level information about the types of donations that the Hwb can accept
and how people can provide them with signposting links to the contact form for more information.

![Donations information](docs/screenshots/donations.png 'Donations information')

#### *Contact form with modal and validation*
The contact form is at the bottom of the landing page but can be accessed via links throughout the landing page or the 
events and groups page, as well as the navigation menu. When the user submits the form the input is validated and any error messages
are displayed to the user underneath the relevant input. Once the form has all the required information a modal
appears to the user as a confirmation screen.

![Contact form](docs/screenshots/contact-form.png 'Contact form')

#### Validation
The form's validation appears as error messages under the various input boxes depending on what is or is not provided
when the send button is pressed.

![Contact form validation](docs/screenshots/form-validation.png 'Form validation')

#### Modal
The modal appears once the send button is pressed. When the modal appears the body of the page behind the modal 
is blurred - this helps to increase the contrast between the page and the modal and also suggests to the user that the form behind it
is no longer accepting input. There is an 'x close' clickable span where users would typically expect a button to exist to close the modal.
Once the modal is closed the form inputs are reset and the page body has its blur removed.

![Contact form modal](docs/screenshots/modal.png 'Contact form modal')

### **Events and Regular Groups Page**
The Events and Regular Groups page contains the following sections:
- Events
- Regular Groups
- Room hire information

Each of these sections provides the user with distinct information about the Hwb's activities.
The Events and Regular Groups sections share a similar card-based design to the Latest News section on the landing page.
It is hoped that this consistency would promote a sense of cohesiveness and professionalism to the user with a title,#
image and detail parts to the cards.

Both the Events and Regular Groups sections are responsive. The amount of cards per column and row
adapts depending on the user's viewport width. This ensures that the user's screen isn't overloaded with information, but
offers an attractive design.

![Events and Regular Groups](docs/screenshots/events.png 'Events')
![Regular Groups](docs/screenshots/groups.png 'Regular Groups')

### **Room hire** ###
The Room Hire section provides the user with basic information about which rooms are available for hire.
There is also a link to the contact form to enquire about booking.


![Room hire section](docs/screenshots/roomhire.png)

## **Future Enhancements**
This website has the potential for various new features and enhancements. I have written them below in the form of user stories for clarity.

*Financial donation payments*:

As a user, 
I would like a easily accessible widget
so that I can make easy and secure financial donations.

*Events calendar*:

As a user, I would like a calendar so that I can easily find out what events are occurring on specific dates.

*Room hire booking app*:
As a user, I would like an app that accepts room bookings so that I can book a room at my convenience.

*Content Management System*: As the site owner, I would like a system for creating and updating content, so that I can maintain the website and keep it up to date.

***

## **Typography**
The fonts used have been selected and imported from Google.
- Londrina Solid: for all main headings and the logotype in the header navbar
- Fredoka: for all other text including links and navbar text


***
## **Testing Phase**
During the development process, I have manually tested as well as used various automated testing tools.

I have manually testing each element for appearance and responsiveness via a simulated live server using Python's integrated web server.

I have published the page via GitHub pages and shared with fellow peers, friends and family to test and received feedback.

During testing, I used five different browsers to ensure cross-compatibility.

*Desktop browsers*

- Chrome
- Firefox
- Opera
- Edge
- Brave
- Safari

I have also used the Chrome DevTools to simulate different screen sizes/devices from 320 px up to 4000px in width.


## Bugs and Fixes:
Below is a list of bugs I found during the development process by testing myself via the live server extension on VSCode. I tried each element for how the browser would display the page to potential users on a range of different screen widths from 320px to 4000px:-

1. Expected behaviour: Carousel images to display responsively for mobile devices
   - **Actual behaviour**: Carousel images not displaying correctly on mobile
   - **Fix**: I had to adjust the image size and the carousel container size to ensure that the images were displayed correctly on mobile devices.
2. Expected behaviour: Carousel images to display responsively for desktop devices
   - **Actual behaviour**: Carousel images not displaying correctly on desktop**:
   - **Fix**: I had to adjust the image size and the carousel container size to ensure that the images were displayed correctly on desktop devices.
3. Expected behaviour: Carousel images to display responsively for tablet devices
   - **Actual behaviour**: Carousel images not displaying correctly on tablet:
   - **Fix**: I had to adjust the image size and the carousel container size to ensure that the images were displayed correctly on tablet devices.
4. Expected behaviour:
   - **Actual behaviour**: Contact form HTML validation rules no applying
   - **Fix**: Create a set of JavaScript rules to check for input in the form fields and to provide feedback to the user.
5. **Expected behaviour**: If an invalid email address is entered in the email input in the contact form the form does not submit.
   - **Actual behaviour**: The form submits.
   - **Fix**: Add a JavaScript function with a regex pattern to check the input as part of the input validation rules.
6. **Expected behaviour**: When the user scrolls to certain sections within the website the navigation bar highlights the appropriate section.
   - **Actual behaviour**: The navigation bar does not highlight the appropriate section correctly.
   - **Fix**: Add a JavaScript function that looks for a custom *data-nav* attribute on horizontal rule elements to check
   the user's scroll position. This then applies the correct styling to the navigation bar.
7. **Expected behaviour**: The hero image and text overlay should responsively change size in a consistent way depending on the user's viewport.
   - **Actual behaviour**: The hero image and text changes size inconsistently.
   - **Fix**: Set the parent hero element's height as a 50% proportion of the view height.

## Post Development Testing
I have used the following tools to test the website for accessibility and performance:-
- Google Chrome DevTools Lighthouse
- W3C Markup Validation Service
- W3C CSS Validation Service
- 
***
## **Deployment**

***
## **Credits**
### **Thank yous**

* [Richard Wells](https://github.com/D0nni387) - Code Institute Mentor who has gone above and beyond what was expected of him to help me get this far in the course.


### **References:**


### **Content:**
* Icons were borrowed from [Font Awesome](https://fontawesome.com)
* The golden gradient colour scheme - [brandgradients.com](http://www.brandgradients.com/gold-gradient).
* All fonts imported from - [Google Fonts](https://fonts.google.com/)
* Accessibility checker - [WAVE - Web accessibility evaluation tool](https://wave.webaim.org/)
  
### **Media:**

* Images requiring compression were done using - [tiny.png](https://tinypng.com) 

* Screenshot under README.md section titled "site overview" was created view [Am I responsive](https://ui.dev/amiresponsive?url=https://gwhitdev.github.io/colwynbay-hwb/)

* Colour grid contract tool - [Eightshapes](https://contrast-grid.eightshapes.com/) 

* Calculator used to resize figure images -[Aspect Ratio Calculator](https://andrew.hedges.name/experiments/aspect_ratio/)

### **Other*:*
* Original inspiration for the carousel feature: [W3Schools](https://www.w3schools.com/howto/howto_js_slideshow.asp)

