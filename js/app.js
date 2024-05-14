/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 *
*/

const navList = document.getElementById('navbar__list');
const sections = document.getElementsByTagName('section');
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 * Start Helper Functions
 *
*/

function scroll(e) {
    e.preventDefault();

    document.getElementById(e.target.getAttribute("data-scroll")).scrollIntoView({
    behavior: 'smooth'
        });
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav

function makeNav(){
    for (let section of sections){
        const navListElement = document.createElement('li');
        navListElement.innerHTML =`<a href="#${section.id}" data-scroll="${section.id}" class="menu__link">${section.dataset.nav}</a>`;
        fragment.appendChild(navListElement);
    };
    navList.appendChild(fragment);
};

// Add class 'active' to section when near top of viewport

function makeActive(){
    for (let section of sections){

        const box = section.getBoundingClientRect();

        if (box.top <= 150 && box.bottom >= 150) {
          section.classList.add('your-active-class');
          const correspondingAnchor = document.querySelector(`a[href="#${section.id}"]`);
          correspondingAnchor.classList.add('active');

        } else {
          section.classList.remove('your-active-class');
          const correspondingAnchor = document.querySelector(`a[href="#${section.id}"]`);
          correspondingAnchor.classList.remove('active');
        }
      };
};

// Scroll to anchor ID using scrollTO event

function addScroll() {
    const anchors = document.getElementsByTagName('a');

    for (let anchor of anchors){
        anchor.addEventListener('click', scroll)};
};

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

makeNav();

// Scroll to section on link click

addScroll();

// Set sections as active

makeActive();

document.addEventListener("scroll", makeActive);
