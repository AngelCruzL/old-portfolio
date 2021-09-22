const $sliderContainer = document.querySelector('.slider__container');

getData();

async function getData() {
  try {
    const res = await fetch(`data/portfolio.json`);
    const data = await res.json();

    createSlides(data);
  } catch (err) {
    console.error(err);
  }
}

function createSlides({ projects }) {
  projects.forEach((slide, i) => {
    const { image, alt, title, previewDescription, url } = slide;

    $sliderContainer.insertAdjacentHTML(
      'beforeend',
      `
        <scroll-page class="slider__slide" id="slide-${i + 1}">
          <div class="card-container">
            <div class="card">
              <img
                src="${image}"
                alt="${alt}"
                class="card__image"
              />
              <div class="card__data">
                <h3 class="card__title">${title}</h3>
                <p class="card__description">
                ${previewDescription}
                </p>
                <a href="${url}" target="_blank" class="button button--center">Ver más</a>
              </div>
            </div>
          </div>
        </scroll-page>
      `
    );
  });
}

// <button class="card__button">Ver más</button>;
