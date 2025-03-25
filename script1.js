'use strict';

const agent = document.querySelector('.chat-box');
const options = document.querySelector('.dropdown');
const slide = document.querySelector('.cta');

slide.addEventListener('click', function (e) {
  e.preventDefault();

  // console.log(`Working....`);
  //  Scrolling to the section with id='transaction'
  document.getElementById('transaction').scrollIntoView({ behavior: 'smooth' });
});

// dropdown
// menu toggle
document
  .getElementById('dropdownButton')
  .addEventListener('click', function () {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  });

// Close the menu if clicked outside
window.addEventListener('click', function (e) {
  const button = document.getElementById('dropdownButton');
  const menu = document.getElementById('dropdownMenu');
  if (!button.contains(e.target) && !menu.contains(e.target)) {
    menu.style.display = 'none';
  }
});
