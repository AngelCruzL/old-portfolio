const $sliderContainer = document.querySelector('.slider__container');

const data = {
  projects: [
    {
      imageWebp:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/omnifood.webp?token=AOEEXY4C6GAHIE6PDOS73DTBKTXLS',
      image:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/omnifood.png?token=AOEEXY5SA2SCYKQEDKOKQCLBKTXK6',
      alt: 'Omnifood',
      title: 'Omnifood',
      previewDescription:
        'Omnifood es una empresa que se dedica a la entrega de comida saludable, en este landing page se pueden ver algunas características del servicio.',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.',
      url: 'https://github.com/AngelCruzL/omnifood',
    },
    {
      imageWebp:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/natours.webp?token=AOEEXY6CBRKZSIM3PYCQFO3BKTW3A',
      image:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/natours.png?token=AOEEXY2MHB3OBMRCE2MLRCDBKTXCM',
      alt: 'Natours',
      title: 'Natours',
      previewDescription:
        'Natours es una agencia de viajes que ofrece servicios de tours en distintos lugares, en esta landing page se pueden ver características del servicio.',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.',
      url: 'https://github.com/AngelCruzL/omnifood',
    },
    {
      imageWebp:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/react-calendar.webp?token=AOEEXY2OHNOPSYSRLOQMWNLBKTXO6',
      image:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/react-calendar.png?token=AOEEXY4TPGAAYJG72V3OREDBKTXNK',
      alt: 'Custom Calendar',
      title: 'Custom Calendar',
      previewDescription:
        'Esta aplicación similar a Google calendar permite observar eventos de las personas que estén registrados en ella, pensada para agendar eventos dentro de equipos de trabajo.',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.',
      url: 'https://github.com/AngelCruzL/omnifood',
    },
    {
      imageWebp:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/react-calendar.webp?token=AOEEXY2OHNOPSYSRLOQMWNLBKTXO6',
      image:
        'https://raw.githubusercontent.com/AngelCruzL/portfolio/main/src/img/react-calendar.png?token=AOEEXY4TPGAAYJG72V3OREDBKTXNK',
      alt: 'Calendar Backend',
      title: 'Calendar Backend',
      previewDescription:
        'Esta es la parte de backend de la aplicación Custom Calendar, no cuenta con una parte visual, pero es posible ver el código fuente del proyecto.',
      description:
        ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem ducimus accusamus architecto.',
      url: 'https://github.com/AngelCruzL/omnifood',
    },
  ],
};

data.projects.forEach((slide, i) => {
  const { imageWebp, image, alt, title, previewDescription, url } = slide;

  $sliderContainer.insertAdjacentHTML(
    'beforeend',
    `
        <scroll-page class="slider__slide" id="slide-${i + 1}">
          <div class="card-container">
            <div class="card">
              <picture>
                <source srcset="${imageWebp}" type="image/webp">
                <img
                src="${image}"
                alt="${alt}"
                class="card__image"
                loading="lazy"
                decoding="async"
              />
              </picture>
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
