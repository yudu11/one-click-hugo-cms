// JS Goes here - ES6 supported

import "./css/main.scss";

// Mobile menu functionality
const mobileMenu = document.querySelector("[data-mobile-menu]");
const nav = document.querySelector("[data-nav]");

function toggleMobileMenu() {
  nav.classList.toggle("menu-open");
}

if (mobileMenu) {
  mobileMenu.addEventListener("click", toggleMobileMenu);
}

// Language preference handling
function handleLanguagePreference() {
  // Only run this if we're not inside the CMS
  if (window.location.pathname.indexOf('/admin') === -1) {
    // Get the current HTML lang attribute
    const currentLang = document.documentElement.lang || 'en';
    
    // Get stored preference or use current lang as default
    const savedLang = localStorage.getItem('preferredLanguage');
    
    // If there's no saved preference yet, save the current one
    if (!savedLang) {
      localStorage.setItem('preferredLanguage', currentLang);
    }
    
    // Update language toggle if it exists
    const langToggle = document.getElementById('language-toggle');
    if (langToggle) {
      const preferredLang = localStorage.getItem('preferredLanguage') || currentLang;
      const enToggle = document.getElementById('lang-en');
      const zhToggle = document.getElementById('lang-zh');
      
      if (enToggle && zhToggle) {
        if (preferredLang === 'en') {
          enToggle.classList.add('active');
          zhToggle.classList.remove('active');
        } else {
          zhToggle.classList.add('active');
          enToggle.classList.remove('active');
        }
      }
    }
  }
}

// Run when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  handleLanguagePreference();
});

// Say hello
// eslint-disable-next-line no-console
console.log("🦊 Hello! Edit me in src/index.js");
