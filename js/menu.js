/**
 * menu.js - Handles the mobile slide menu functionality
 * for Blackstudio website
 */

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  
  // Get elements
  const menuButton = document.getElementById('menuButton');
  const slideMenu = document.getElementById('slideMenu');
  const closeButton = document.getElementById('closeButton');
  const overlay = document.getElementById('overlay');

  // Check if elements exist (prevents errors if IDs are missing)
  if (!menuButton || !slideMenu || !closeButton || !overlay) {
    console.warn('Menu elements not found - skipping menu initialization');
    return;
  }

  // Function to open menu
  function openMenu() {
    slideMenu.classList.add('open');
    overlay.classList.add('show');
    menuButton.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  // Function to close menu
  function closeMenu() {
    slideMenu.classList.remove('open');
    overlay.classList.remove('show');
    menuButton.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Event listeners
  menuButton.addEventListener('click', openMenu);
  closeButton.addEventListener('click', closeMenu);
  overlay.addEventListener('click', closeMenu);

  // Close menu with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && slideMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Handle window resize - close menu if screen becomes desktop size
  window.addEventListener('resize', function() {
    if (window.innerWidth > 600 && slideMenu.classList.contains('open')) {
      closeMenu();
    }
  });

  // Optional: Log that menu initialized successfully
  console.log('Mobile menu initialized');
});
