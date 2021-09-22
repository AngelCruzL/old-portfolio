const $skills = document.querySelectorAll('details');

console.log($skills[1]);

$skills.forEach(list => {
  list.addEventListener('click', e => {
    if (!e.target.parentElement.open)
      e.target.classList.remove('skills__close');
    if (e.target.parentElement.open) e.target.classList.add('skills__close');
  });
});
