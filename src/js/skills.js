const $skills = document.querySelectorAll('details');

$skills.forEach(list => {
  list.addEventListener('click', e => {
    if (!e.target.parentElement.open)
      e.target.classList.remove('skills__close');
    if (e.target.parentElement.open) e.target.classList.add('skills__close');
  });
});
