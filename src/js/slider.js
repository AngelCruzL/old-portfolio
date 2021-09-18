document.querySelector('.slider__bullet-list').addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('slider__bullet-list-item')) {
    const id = e.target.getAttribute('href');
    if (id !== '#')
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

const slider = function () {
  const $slides = document.querySelectorAll('.slider__slide');
  const $btnPrev = document.querySelector('.slider__prev');
  const $btnNext = document.querySelector('.slider__next');
  const $dotsContainer = document.querySelector('.slider__bullet-list');

  let currentSlide = 0;
  const maxSlides = $slides.length;

  const init = function () {
    createDots();
    activateDots(0);
  };

  init();

  $btnNext.addEventListener('click', nextSlide);

  $btnPrev.addEventListener('click', prevSlide);

  document.addEventListener('keydown', e => {
    e.key === 'ArrowLeft' && prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  $dotsContainer.addEventListener('click', e => {
    if (e.target.classList.contains('slider__bullet-list-item')) {
      const { slide } = e.target.dataset;
      activateDots(slide - 1);
    }
  });

  function createDots() {
    $slides.forEach((_, i) => {
      $dotsContainer.insertAdjacentHTML(
        'beforeend',
        ` <a class="slider__bullet-list-item" href="#slide-${
          i + 1
        }" data-slide="${i + 1}">Project ${i + 1}</a>`
      );
    });
  }

  function activateDots(slide) {
    document
      .querySelectorAll('.slider__bullet-list-item')
      .forEach(dot => dot.classList.remove('slider__bullet-list-item--active'));

    document
      .querySelector(`.slider__bullet-list-item[data-slide="${slide + 1}"]`)
      .classList.add('slider__bullet-list-item--active');
  }

  function goToSlide(slide) {
    document
      .querySelector(`#slide-${slide + 1}`)
      .scrollIntoView({ behavior: 'smooth' });
  }

  function nextSlide() {
    if (currentSlide === maxSlides - 1) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }

    goToSlide(currentSlide);
    activateDots(currentSlide);
  }

  function prevSlide() {
    if (currentSlide === 0) {
      currentSlide = maxSlides - 1;
    } else {
      currentSlide--;
    }

    goToSlide(currentSlide);
    activateDots(currentSlide);
  }
};

slider();
