// Idee von Manuel Matuzovic 
// »Building the main navigation for a website«
// https://web.dev/articles/website-navigation#adding_a_burger_button
// Bezeichnungen und Reihenfolge der Schritte etwas angepasst 

// 1. HTML aus dem Template #tb kopieren und Button definieren 
const buttonHTML = document.querySelector('#tb').content.cloneNode(true);
const menubutton = buttonHTML.querySelector('button');

// 2. Elternelement und Navigationsliste finden und kopiertes HTML einfügen
const navlistParent = document.querySelector('#site-nav > div.inside');
const navlist = navlistParent.querySelector('ul');
navlistParent.insertBefore(buttonHTML, navlist); 

// 3. Trigger: aria-expanded bei Klick auf Button umschalten (false/true)
menubutton.addEventListener('click', e => {
  const isExpanded = menubutton.getAttribute('aria-expanded') === "true"; 
  menubutton.setAttribute('aria-expanded', !isExpanded);
});

// Ende menubutton.js