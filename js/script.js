const btnHambur = document.querySelector(".bi-list");
const menuContainer = document.querySelector(".menu-container");
const menu = document.querySelector(".menu");
const body = document.body;

btnHambur.addEventListener("click", () => {
  menuContainer.style.display = "flex";
  menuContainer.classList.toggle("menu-visible");
  body.classList.toggle("background-overlay");
  cardOverlay.style.display = "none";
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
        descriptionDetail:
          "La 'Feria de las Colectividades' es una muestra dinámica de objetos culturales, que favorece la lectura de las tramas relacionales entre los actores sociales que concurren a la institución. ",
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
        descriptionDetail:
          "Relata las vivencias de un grupo de personas en un parque de diversiones con dinosaurios clonados, creado por un filántropo multimillonario y un equipo de científicos genetistas.",
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
        descriptionDetail:
          "Disfraces, calabazas, historias de terror y juegos como truco o trato... la noche más oscura del año. ",
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
        descriptionDetail:
          "Ven a disfrutar del concierto de la banda más famosa de todos los tiempos. Invitados especiales.",
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
        descriptionDetail:
          "Ponte en forma y ven a correr la última maratón del año. Gana increíbles premios.",
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
        descriptionDetail:
          "Ven a intercambiar libros y a tener comunicación con los clientes.",
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
        descriptionDetail:
          "Los Vengadores restantes deben encontrar una manera de recuperar a sus aliados para un enfrentamiento épico con Thanos, el malvado que diezmó el planeta y el universo.",
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
        descriptionDetail:
          "Cristiano Ronaldo, la estrella del momento, va a ser presentado por el Al Nassr; un equipo de Arabia.",
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
        descriptionDetail:
          "Una fiesta, feria o festival gastronómico o de comida es un evento de ocio cuyo tema central son los alimentos y/o bebidas, bien sea sobre una técnica culinaria o producto en particular o sobre la gastronomía de una región, una denominación de origen, entre otros.",
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
        descriptionDetail:
          "Además de contar con el primer y único campo de juego con tecnología híbrida con sistemas de aireación y climatización del país, el Monumental contará con nuevas tribunas bajas inferiores, 180 palcos, 926 plateas hospitality, restaurante 24/7 y circulación 360° en palcos, tres nuevos niveles de estacionamiento y nuevo...",
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
        descriptionDetail:
          "Reunión de autoridades políticas e intelectuales para tratar un tema importante; los trabajos del futuro.",
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
        descriptionDetail:
          "Los videojuegos del futuro, impulsados por las mejoras en inteligencia artificial, gráficos de alta definición, procesamiento de imágenes digitales, sensores, diseño 3D y nuevas formas de interfaz hombre-consola, evolucionarán para ser más complejos, con mayor grado de personalización, y atmósferas más inmersivas...",
        category: "Juegos",
        capacity: 3000,
        estimate: 3000,
        price: 400,
      },
    ],
  },
];

let sliderTitle = document.querySelector(".slider-title");

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

let indexArrow = 1;

function upcommingEvents(e) {
  e.preventDefault();

  const cardFilter = eventsFilter.filter((estimate) => estimate.estimate);

  if (cardFilter) {
    addCard(cardFilter);
  }

  indexArrow = 2;
  checkAllEvents.checked = false;
  checkPastEvents.checked = false;
  checkUpcommingEvents.checked = true;
  navbarLinksHome.classList.remove("active");
  navbarLinksPast.classList.remove("active");
  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksUpcomming.classList.add("active");
  sliderTitle.innerText = "Eventos próximos";
  timeOut();
}

function pastEvents(e) {
  e.preventDefault();

  const cardFilter = eventsFilter.filter((estimate) => estimate.assistance);

  if (cardFilter) {
    addCard(cardFilter);
  }

  indexArrow = 3;
  checkAllEvents.checked = false;
  checkUpcommingEvents.checked = false;
  checkPastEvents.checked = true;
  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksHome.classList.remove("active");
  navbarLinksUpcomming.classList.remove("active");
  navbarLinksPast.classList.add("active");
  sliderTitle.innerText = "Eventos pasados";
  timeOut();
}

checkAllEvents.checked = true;

function checked(e) {
  const valueCheck = e.target.id;

  if (valueCheck === "allEvents") {
    indexArrow = 1;
    checkAllEvents.checked = true;
    checkPastEvents.checked = false;
    checkUpcommingEvents.checked = false;
    inputSearch.value = "";
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksHome.classList.add("active");
    addCard(eventsFilter);
    timeOut();
    sliderTitle.innerText = "Inicio";
  } else if (valueCheck === "upcommingEvents") {
    indexArrow = 2;
    checkUpcommingEvents.checked = true;
    checkAllEvents.checked = false;
    checkPastEvents.checked = false;
    inputSearch.value = "";
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksUpcomming.classList.add("active");
    upcommingEvents();
  } else if (valueCheck === "pastEvents") {
    indexArrow = 3;
    checkPastEvents.checked = true;
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    inputSearch.value = "";
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksPast.classList.add("active");
    pastEvents();
  } else if (valueCheck === "contact") {
    indexArrow = 4;
  } else {
    indexArrow = 5;
  }
}

timeOut();
addCard(eventsFilter);

const arrowRight = document.querySelector(".bi-chevron-right");
const arrowLeft = document.querySelector(".bi-chevron-left");

arrowRight.addEventListener("click", arrowPlus);
arrowLeft.addEventListener("click", arrowMinus);

const navbarLinks = document.querySelector(".navbar-links");
const navbarLinksHome = document.querySelector(".navbar-links");
const navbarLinksUpcomming = document.querySelector(".navbar-links-upcomming");
const navbarLinksPast = document.querySelector(".navbar-links-past");
const navbarLinksContact = document.querySelector(".navbar-links-contact");
const navbarLinksStats = document.querySelector(".navbar-links-stats");

navbarLinksPast.addEventListener("click", pastEvents);
navbarLinksUpcomming.addEventListener("click", upcommingEvents);

function timeOut() {
  sliderTitle.style.transform = "scale(.8)";
  setTimeout(() => {
    sliderTitle.style.transform = "scale(.9)";
  }, 600);
}

sliderTitle.innerText = "Inicio";

function arrowPlus() {
  timeOut();

  if (indexArrow == 5) {
    indexArrow = 1;
  } else {
    indexArrow++;
  }

  if (indexArrow == 1) {
    sliderTitle.innerText = "Inicio";
    checkPastEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkAllEvents.checked = true;
    navbarLinksPast.classList.remove("active");
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksHome.classList.add("active");
    addCard(eventsFilter);
  } else if (indexArrow == 2) {
    sliderTitle.innerText = "Eventos próximos";
    upcommingEvents();
  } else if (indexArrow == 3) {
    sliderTitle.innerText = "Eventos pasados";
    pastEvents();
  } else if (indexArrow == 4) {
    sliderTitle.innerText = "Contacto";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksContact.classList.add("active");
  } else if (indexArrow == 5) {
    sliderTitle.innerText = "Estadísticas";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksStats.classList.add("active");
  }
}

function arrowMinus() {
  timeOut();

  if (indexArrow == 1) {
    indexArrow = 5;
  } else {
    indexArrow--;
  }

  if (indexArrow == 5) {
    sliderTitle.innerText = "Estadísticas";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksStats.classList.add("active");
  } else if (indexArrow == 4) {
    sliderTitle.innerText = "Contacto";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksContact.classList.add("active");
  } else if (indexArrow == 3) {
    sliderTitle.innerText = "Eventos pasados";
    pastEvents();
  } else if (indexArrow == 2) {
    sliderTitle.innerText = "Eventos próximos";
    upcommingEvents();
  } else if (indexArrow == 1) {
    sliderTitle.innerText = "Inicio";
    addCard(eventsFilter);
    checkPastEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkAllEvents.checked = true;
    navbarLinksPast.classList.remove("active");
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksHome.classList.add("active");
  }
}

function search(e) {
  const letter = e.target.value;

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
    checkAllEvents.checked = true;
    checkPastEvents.checked = false;
    checkUpcommingEvents.checked = false;
    sliderTitle.innerText = "Inicio";
    navbarLinksHome.classList.add("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksPast.classList.remove("active");
  }

  // const filtered = eventsFilter.filter((event) => event.estimate);
  // const filteredEstimate = filtered.map((event) => {});

  // console.log(filtered2);

  // if (data.length == 0) {
  //   cardsContainer.innerHTML = "";
  //   cardsContainer.appendChild(cardsEvents);
  // } else if (checkUpcommingEvents.checked == true && filtered) {
  //   addCard(filteredEstimate);
  // }
}

function addCard(data) {
  indexArrow = 1;

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
  menuContainer.classList.remove("menu-visible");
  body.classList.remove("background-overlay");

  const dataValue =
    e.target.parentElement.parentElement.querySelector("h3").textContent;

  const dataEvent = eventsFilter.find((event) => event.name == dataValue);

  eventsFilter.map((event) => {
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
                ${dataEvent.descriptionDetail}
              </p>
            
            </div>
          </div>
        `;
  });
}
{
  /* <p class="cards-estimate-assitance">
Personas ${dataEvent.estimate || dataEvent.assistance}
</p> */
}
cardOverlay.addEventListener("click", (e) => {
  if (
    e.target.className == "cards-show-overlay" ||
    e.target.className == "bi bi-x-lg"
  ) {
    cardOverlay.style.display = "none";
    inputSearch.value = "";
  }
});

function windowScroll() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const navbarLinks = document.querySelectorAll(".navbar-links");

    if (window.innerWidth == 390) {
      if (window.scrollY >= 70) {
        header.style.borderBottom = "none";
        header.style.backgroundColor = "#fdfdfd";
        header.style.transition = ".5s";
        btnHambur.style.color = "#1e1e1e";
        menuContainer.style.backgroundColor = "#1e1e1e";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#fdfdfd"));
      } else {
        header.style.borderBottom = "1px solid #fdfdfd";
        header.style.backgroundColor = "transparent";
        btnHambur.style.color = "#fdfdfd";
        menuContainer.style.backgroundColor = "#fdfdfd";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#1e1e1e"));
      }
    } else {
      if (window.scrollY >= 70) {
        header.style.borderBottom = "none";
        header.style.backgroundColor = "#fdfdfd";
        header.style.transition = ".5s";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#1e1e1e"));
        menuContainer.style.backgroundColor = "transparent";
      } else {
        header.style.borderBottom = "1px solid #fdfdfd";
        header.style.backgroundColor = "transparent";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#fdfdfd"));
      }
    }
  });
}

windowScroll();
