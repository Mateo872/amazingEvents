const btnHambur = document.querySelector(".bi-list");
const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const body = document.body;

btnHambur.addEventListener("click", () => {
  menuContainer.style.display = "flex";
  menuContainer.classList.toggle("menu-visible");
  body.classList.toggle("background-overlay");
});

let events = [
  {
    fechaActual: "2022-01-01",
    eventos: [
      {
        id: 1,
        image: "Feria de comidas7.jpg",
        name: "Fiesta de las colectividades",
        date: "2021-12-12",
        description:
          "Disfruta de tus platos favoritos, de los diferentes paises, en un evento unico para toda la familia.",
        category: "Feria de Comida",
        place: "Salón A",
        capacity: 45000,
        assistance: 42756,
        price: 5,
      },
      {
        id: 2,
        image: "Salida al museo5.jpg",
        name: "Parque Jurásico",
        date: "2021-11-02",
        description:
          "Vamos al museo de paleontologia a hacer un recorrido increible para conocer los mas grandes dinosaurios.",
        category: "Salida al museo",
        place: "Campo",
        capacity: 82000,
        assistance: 65892,
        price: 15,
      },
      {
        id: 3,
        image: "Fiesta de disfraces1.jpg",
        name: "Noche de Halloween",
        date: "2022-02-12",
        description:
          "Ven con tu personaje disfras mas aterrador para ganar increibles premios.",
        category: "Fiesta de Disfraces",
        place: "Salón C",
        capacity: 12000,
        estimate: 9000,
        price: 12,
      },
      {
        id: 4,
        image: "Concierto de musica1.jpg",
        name: "Metallica in concert",
        date: "2022-01-22",
        description: "Unico recital de la banda mas emblematica. ",
        category: "Concierto de Música",
        place: "Salón A",
        capacity: 138000,
        estimate: 138000,
        price: 150,
      },
      {
        id: 5,
        image: "Maraton3.jpg",
        name: "10K por la vida",
        date: "2021-03-01",
        description:
          "Ven y haz ejercicio, mejora tu salud y tu estilo de vida.",
        category: "Carrera",
        place: "Campo de Futból",
        capacity: 30000,
        assistance: 25698,
        price: 3,
      },
      {
        id: 6,
        image: "Libros7.jpg",
        name: "Feria del libro Escolar",
        date: "2021-10-15",
        description:
          "Trae tu libro escolar que ya no usas y lleva el que necesites.",
        category: "Intercambio de Libros",
        place: "Salón D1",
        capacity: 150000,
        assistance: 123286,
        price: 1,
      },
      {
        id: 7,
        image: "Cine7.jpg",
        name: "Avengers",
        date: "2022-10-15",
        description:
          "Premier en 3d de Avengers de Marvel el inicio de una saga epica con tus mejores superheroes.",
        category: "Vamos al Cine",
        place: "Salón D1",
        capacity: 9000,
        estimate: 9000,
        price: 250,
      },
      {
        id: 8,
        image: "ronaldo.webp",
        name: "Cristiano Ronaldo",
        date: "2023-07-08",
        description: "Presentación de Cristiano Ronaldo en su nuevo club.",
        category: "Presentacion",
        capacity: 9000,
        estimate: 9000,
        price: 500,
      },
      {
        id: 9,
        image: "feria de comida.jpg",
        name: "Feria de comida",
        date: "2023-09-08",
        description:
          "Ven con tu comida favorita para ganar increíbles premios.",
        category: "Feria de comida",
        capacity: 9000,
        estimate: 9000,
        price: 500,
      },
      {
        id: 10,
        image: "monumental.jfif",
        name: "Estadio Monumental",
        date: "2022-01-08",
        description: "Ven a ver un partido en el mejor estadio de América.",
        category: "Partido",
        capacity: 83.214,
        estimate: 83.214,
        price: 2000,
      },
      {
        id: 11,
        image: "charla.jpg",
        name: "Conferencia sobre nuevos trabajos",
        date: "2023-04-10",
        description: "Vamos a presentar los trabajos del futuro.",
        category: "Conferencia",
        capacity: 8500,
        estimate: 8500,
        price: 1000,
      },
      {
        id: 12,
        image: "gamer.jpg",
        name: "Los juegos que se vienen",
        date: "2023-08-10",
        description: "El futuro llegó. Nuevos juegos de realidad aumentada.",
        category: "Juegos",
        capacity: 3000,
        estimate: 3000,
        price: 400,
      },
    ],
  },
];

let detailsDescription = [
  {
    image: "Feria de comidas7.jpg",
    name: "Fiesta de las colectividades",
    description:
      "La 'Feria de las Colectividades' es una muestra dinámica de objetos culturales, que favorece la lectura de las tramas relacionales entre los actores sociales que concurren a la institución. ",
  },
  {
    image: "Salida al museo5.jpg",
    name: "Parque Jurásico",
    description:
      "Relata las vivencias de un grupo de personas en un parque de diversiones con dinosaurios clonados, creado por un filántropo multimillonario y un equipo de científicos genetistas.",
  },
  {
    image: "Fiesta de disfraces1.jpg",
    name: "Noche de Halloween",
    description:
      "Disfraces, calabazas, historias de terror y juegos como truco o trato... la noche más oscura del año. ",
  },
  {
    image: "Concierto de musica1.jpg",
    name: "Metallica in concert",
    description:
      "Ven a disfrutar del concierto de la banda más famosa de todos los tiempos. Invitados especiales.",
  },
  {
    image: "Maraton3.jpg",
    name: "10K por la vida",
    description:
      "Ponte en forma y ven a correr la última maratón del año. Gana increíbles premios.",
  },
  {
    image: "Libros7.jpg",
    name: "Feria del libro Escolar",
    description:
      "Ven a intercambiar libros y a tener comunicación con los clientes.",
  },
  {
    image: "Cine7.jpg",
    name: "Avengers",
    description:
      "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
  },
  {
    image: "ronaldo.webp",
    name: "Cristiano Ronaldo",
    description:
      "Cristiano Ronaldo, la estrella del momento, va a ser presentado por el Al Nassr; un equipo de Arabia.",
  },
  {
    image: "feria de comida.jpg",
    name: "Feria de comida",
    description:
      "Una fiesta, feria o festival gastronómico o de comida es un evento de ocio cuyo tema central son los alimentos y/o bebidas, bien sea sobre una técnica culinaria o producto en particular o sobre la gastronomía de una región, una denominación de origen, entre otros.",
  },
  {
    image: "monumental.jfif",
    name: "Estadio Monumental",
    description:
      "Además de contar con el primer y único campo de juego con tecnología híbrida con sistemas de aireación y climatización del país, el Monumental contará con nuevas tribunas bajas inferiores, 180 palcos, 926 plateas hospitality, restaurante 24/7 y circulación 360° en palcos, tres nuevos niveles de estacionamiento y nuevo...",
  },
  {
    image: "charla.jpg",
    name: "Conferencia sobre nuevos trabajos",
    description:
      "Reunión de autoridades políticas e intelectuales para tratar un tema importante; los trabajos del futuro.",
  },
  {
    image: "gamer.jpg",
    name: "Los juegos que se vienen",
    description:
      "Los videojuegos del futuro, impulsados por las mejoras en inteligencia artificial, gráficos de alta definición, procesamiento de imágenes digitales, sensores, diseño 3D y nuevas formas de interfaz hombre-consola, evolucionarán para ser más complejos, con mayor grado de personalización, y atmósferas más inmersivas...",
  },
];

const eventsFilter = events[0].eventos;

const cardsContainer = document.querySelector(".cards-container");

const inputSearch = document.querySelector(".input-text");

const cardsEvents = document.querySelector(".cards-events");

inputSearch.addEventListener("keyup", search);

const labelCheck = document.querySelectorAll(".label-check");
const checkAllEvents = document.querySelector("#allEvents");
const checkUpcommingEvents = document.querySelector("#upcommingEvents");
const checkPastEvents = document.querySelector("#pastEvents");
const inputCheck = document.querySelectorAll(".input");

labelCheck.forEach((check) => check.addEventListener("click", checked));
inputCheck.forEach((check) => check.addEventListener("click", checked));

function upcommingEvents() {
  const cardFilter = eventsFilter.filter((estimate) => estimate.estimate);

  if (cardFilter) {
    addCard(cardFilter);
  }
}
function pastEvents() {
  const cardFilter = eventsFilter.filter((estimate) => estimate.assistance);

  if (cardFilter) {
    addCard(cardFilter);
  }
}

function checked(e) {
  const valueCheck = e.target.id;

  if (valueCheck === "allEvents") {
    checkAllEvents.checked = true;
    checkPastEvents.checked = false;
    checkUpcommingEvents.checked = false;
    inputSearch.value = "";
    addCard(eventsFilter);
  } else if (valueCheck === "upcommingEvents") {
    checkUpcommingEvents.checked = true;
    checkAllEvents.checked = false;
    checkPastEvents.checked = false;
    inputSearch.value = "";
    upcommingEvents();
  } else {
    checkPastEvents.checked = true;
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    inputSearch.value = "";
    pastEvents();
  }
}

addCard(eventsFilter);

function search(e) {
  let letter = e.target.value;

  checkAllEvents.checked = false;
  checkPastEvents.checked = false;
  checkUpcommingEvents.checked = false;

  const data = eventsFilter.filter((lett) =>
    lett.name.toLowerCase().includes(letter.toLowerCase())
  );

  if (data.length == 0) {
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cardsEvents);
  } else {
    addCard(data);
  }
}

function addCard(data) {
  cards = [];

  if (data == undefined) {
    cards = [];
  } else {
    cards.push(...data);
  }
  cardsContainer.innerHTML = "";

  cards.forEach((event) => {
    cardsContainer.innerHTML += `
      <article class="cards">
        <div class="cards-image">
          <img src="./img/${event.image}" alt="Evento cine" />
        </div>
        <h3 class="cards-title">${event.name}</h3>
        <p class="cards-description">${event.description}</p>
        <div class="cards-features">
          <p class="cards-price">Precio <span>$${event.price}</span></p>
          <button class="cards-btn-show-more">Ver más</button>
        </div>
        </article>`;
  });
  ShowMore();

  if (window.innerWidth > 769) {
    if (cardsContainer.children.length === 2) {
      cardsContainer.style.width = "50%";
    } else if (cardsContainer.children.length === 3) {
      cardsContainer.style.width = "70%";
    } else {
      cardsContainer.style.width = "100%";
    }
  }
}

function ShowMore() {
  const btnShowMore = document.querySelectorAll(".cards-btn-show-more");

  btnShowMore.forEach((boton) => boton.addEventListener("click", showCardMore));
}

const cardOverlay = document.querySelector(".cards-show-overlay");
cardOverlay.style.display = "none";

function showCardMore(e) {
  const dataValue =
    e.target.parentElement.parentElement.querySelector("h3").textContent;

  const dataEvent = detailsDescription.find((event) => event.name == dataValue);

  detailsDescription.map((event) => {
    event.name == dataValue;

    cardOverlay.style.display = "flex";

    cardOverlay.innerHTML = `
    <div class="card-show">
              <i class="bi bi-x-lg"></i>
            <div class="cards-image">
              <img src="./img/${dataEvent.image}" alt="Evento cine" />
            </div>
            <div class="card-features">
              <h3 class="cards-title">${dataEvent.name}</h3>
              <p class="cards-description">
                ${dataEvent.description}
              </p>
            </div>
          </div>
        `;
  });
  overlayClose(dataEvent);
}

function overlayClose() {
  cardOverlay.addEventListener("click", () => {
    cardOverlay.style.display = "none";
    inputSearch.value = "";
  });
}
