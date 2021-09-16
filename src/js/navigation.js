const $navMenu = document.getElementById('nav-menu');
const $navToggle = document.getElementById('nav-toggle');
const $navClose = document.getElementById('nav-close');

if ($navToggle)
  $navToggle.addEventListener('click', () => {
    $navMenu.classList.add('show-menu');
  });

if ($navClose)
  $navClose.addEventListener('click', () => {
    $navMenu.classList.remove('show-menu');
  });

const $navLink = document.querySelectorAll('.nav__link');
$navLink.forEach(n => n.addEventListener('click', linkAction));

function linkAction() {
  const $navMenu = document.getElementById('nav-menu');
  $navMenu.classList.remove('show-menu');
}
