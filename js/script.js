let events = [
  {
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
        date: "2023-06-12",
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
        date: "2023-10-22",
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
        date: "2023-10-15",
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
        category: "Futbol",
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
        date: "2023-08-08",
        description: "Ven a ver un partido en el mejor estadio de América.",
        descriptionDetail:
          "Además de contar con el primer y único campo de juego con tecnología híbrida con sistemas de aireación y climatización del país, el Monumental contará con nuevas tribunas bajas inferiores, 180 palcos, 926 plateas hospitality, restaurante 24/7 y circulación 360° en palcos, tres nuevos niveles de estacionamiento y nuevo...",
        category: "Futbol",
        capacity: 83214,
        estimate: 83214,
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
      {
        id: 13,
        image: "mundial.webp",
        name: "Mundial Qatar 2022",
        date: "2022-18-12",
        description: "Argentina campeón del Mundial 2022",
        descriptionDetail:
          "La Copa Mundial de la FIFA, también conocida como Copa Mundial de Fútbol, Copa del Mundo o simplemente Mundial, y cuyo nombre original fue Campeonato Mundial de Fútbol, es el principal torneo internacional oficial de fútbol masculino a nivel de selecciones nacionales en el mundo.",
        category: "Futbol",
        capacity: 60000,
        assistance: 51000,
        price: 1200,
      },
      {
        id: 14,
        image: "riverLibertadores.webp",
        name: "Copa Libertadores 2018",
        date: "2018-12-09",
        description:
          "El partido más importante de la historia del fútbol. <br> Ganador: River Plate.",
        descriptionDetail:
          "La Copa Libertadores de América, denominada oficialmente Copa Conmebol Libertadores desde 2017, y llamada simplemente Copa Libertadores.",
        category: "Futbol",
        capacity: 70000,
        assistance: 63000,
        price: 9000,
      },
      {
        id: 15,
        image: "theBest.webp",
        name: "Premios The Best 2023",
        date: "2023-27-02",
        description: "Ganador del premio The Best: Lionel Messi.",
        descriptionDetail:
          "The Best FIFA es un premio individual de fútbol, que la FIFA decidió crear en el año 2016 con la finalidad de reconocer a los mejores jugadores del mundo de cada temporada.",
        category: "Futbol",
        capacity: 70000,
        assistance: 68400,
        price: 0,
      },
      {
        id: 16,
        image: "champions.jpeg",
        name: "Champions League 2022",
        date: "2022-28-05",
        description: "Ganador de la Champions: <br> Real Madrid.",
        descriptionDetail:
          "La Liga de Campeones de la UEFA, también conocida como Copa de Europa, es el torneo internacional oficial de fútbol más prestigioso a nivel de clubes en Europa.",
        category: "Futbol",
        capacity: 90000,
        assistance: 89000,
        price: 7000,
      },
    ],
  },
];

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

let cards = [];

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

let cardFilter = [];

function upcommingEvents() {
  cardFilter = eventsFilter.filter((estimate) => estimate.estimate);

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

let cardFilterPast = [];

function pastEvents() {
  cardFilterPast = eventsFilter.filter((estimate) => estimate.assistance);

  if (cardFilterPast) {
    addCard(cardFilterPast);
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
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksContact.classList.add("active");
  } else {
    indexArrow = 5;
    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksStats.classList.add("active");
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

navbarLinksHome.addEventListener("click", (e) => {
  e.preventDefault();

  addCard(eventsFilter);

  sliderTitle.innerText = "Inicio";
  indexArrow = 1;

  checkAllEvents.checked = true;
  checkUpcommingEvents.checked = false;
  checkPastEvents.checked = false;

  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksUpcomming.classList.remove("active");
  navbarLinksPast.classList.remove("active");
  navbarLinksHome.classList.add("active");

  containerContact.style.display = "none";
  containerStats.style.display = "none";
  containerEvents.style.display = "block";
});

const containerEvents = document.querySelector(".container-events");

navbarLinksPast.addEventListener("click", (e) => {
  e.preventDefault();
  pastEvents();
  containerContact.style.display = "none";
  containerStats.style.display = "none";
  containerEvents.style.display = "block";
});

navbarLinksUpcomming.addEventListener("click", (e) => {
  e.preventDefault();
  upcommingEvents();
  containerContact.style.display = "none";
  containerStats.style.display = "none";
  containerEvents.style.display = "block";
});

navbarLinksContact.addEventListener("click", (e) => {
  e.preventDefault();
  contact();
});

navbarLinksStats.addEventListener("click", (e) => {
  e.preventDefault();
  stats();
});

const containerContact = document.querySelector(".container-contact");
const containerStats = document.querySelector(".container-stats");

containerContact.style.display = "none";
containerStats.style.display = "none";

function contact() {
  containerContact.style.display = "block";

  indexArrow = 4;

  containerStats.style.display = "none";
  containerEvents.style.display = "none";
  sliderTitle.innerText = "Contáctame";
  navbarLinksPast.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksUpcomming.classList.remove("active");
  navbarLinksHome.classList.remove("active");
  navbarLinksContact.classList.add("active");
}

function stats() {
  containerStats.style.display = "flex";

  indexArrow = 5;

  containerContact.style.display = "none";
  containerEvents.style.display = "none";

  sliderTitle.innerText = "Estadísticas";
  navbarLinksPast.classList.remove("active");
  navbarLinksUpcomming.classList.remove("active");
  navbarLinksHome.classList.remove("active");
  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.add("active");

  cardFilterPast = eventsFilter.filter((estimate) => estimate.assistance);

  const filterCapacity = eventsFilter.filter((estimate) => estimate.capacity);

  const filterMax = cardFilterPast.sort((a, b) => {
    if ((a.assistance * 100) / a.capacity < (b.assistance * 100) / b.capacity) {
      return 1;
    }
    if ((a.assistance * 100) / a.capacity > (b.assistance * 100) / b.capacity) {
      return -1;
    }
    return 0;
  });

  const capacity = filterCapacity.sort((a, b) => {
    if (a.capacity < b.capacity) {
      return 1;
    }
    if (a.capacity > b.capacity) {
      return -1;
    }
    return 0;
  });

  const eventsCategory = eventsFilter.filter((estimate) => estimate.estimate);

  const revenues = eventsCategory.sort((a, b) => {
    if (a.estimate < b.estimate) {
      return 1;
    }
    if (a.estimate > b.estimate) {
      return -1;
    }
    return 0;
  });

  containerStats.innerHTML = `
  <h2>Estadísticas de los eventos</h2>
      <table>
      <tr>
                  <th>Eventos con mayor porcentaje de audiencia</th>
                  <td>${cardFilterPast[0].name} con ${parseInt(
    (filterMax[0].assistance * 100) / filterMax[0].capacity
  )}%</td>
                  <td>${cardFilterPast[1].name} con ${parseInt(
    (filterMax[1].assistance * 100) / filterMax[1].capacity
  )}%</td>
                  <td>${cardFilterPast[2].name} con ${parseInt(
    (filterMax[2].assistance * 100) / filterMax[2].capacity
  )}%</td>
      
        <th>Eventos con menor porcentaje de audiencia</th>
        <td>${cardFilterPast.reverse()[0].name} con ${parseInt(
    (cardFilterPast[0].assistance * 100) / cardFilterPast[0].capacity
  )}%</td>
        <td>${cardFilterPast[1].name} con ${parseInt(
    (cardFilterPast[1].assistance * 100) / cardFilterPast[1].capacity
  )}%</td>
        <td>${cardFilterPast[2].name} con ${parseInt(
    (cardFilterPast[2].assistance * 100) / cardFilterPast[2].capacity
  )}%</td>
        <th>Eventos con mayor capacidad</th>
        <td>${capacity[0].name} con ${capacity[0].capacity} personas</td>
        <td>${capacity[1].name} con ${capacity[1].capacity} personas</td>
        <td>${capacity[2].name} con ${capacity[2].capacity} personas</td>
      </tr>
    </table>

  <h2>Estadísticas de los próximos eventos por categoria</h2>
    <table>
    <tr>
        <th>Categorías</th>
        <td>${revenues[0].name}</td>
        <td>${revenues[1].name}</td>
        <td>${revenues[2].name}</td>
        <th>Ingresos</th>
        <td>$${revenues[0].price * revenues[0].estimate}</td>
        <td>$${revenues[1].price * revenues[1].estimate}</td>
        <td>$${revenues[2].price * revenues[2].estimate}</td>
        <th>Porcentaje de audiencia</th>
        <td>${parseInt(
          (revenues[0].estimate * 100) / revenues[0].capacity
        )}%</td>
        <td>${parseInt(
          (revenues[0].estimate * 100) / revenues[0].capacity
        )}%</td>
        <td>${parseInt(
          (revenues[0].estimate * 100) / revenues[0].capacity
        )}%</td>
    </tr>
    </table>

<h2>Estadísticas de los pasados eventos por categoria</h2>
  <table>
  <tr>
      <th>Categorías</th>
      <td>${cardFilterPast[0].name}</td>
      <td>${cardFilterPast[1].name}</td>
      <td>${cardFilterPast[2].name}</td>
      <th>Ingresos</th>
      <td>$${cardFilterPast[0].price * cardFilterPast[0].assistance}</td>
      <td>$${cardFilterPast[1].price * cardFilterPast[1].assistance}</td>
      <td>$${cardFilterPast[2].price * cardFilterPast[2].assistance}</td>
      <th>Porcentaje de audiencia</th>
      <td>${parseInt(
        (cardFilterPast[0].assistance * 100) / cardFilterPast[0].capacity
      )}%</td>
      <td>${parseInt(
        (cardFilterPast[0].assistance * 100) / cardFilterPast[0].capacity
      )}%</td>
      <td>${parseInt(
        (cardFilterPast[0].assistance * 100) / cardFilterPast[0].capacity
      )}%</td>
  </tr>
  </table>
`;
}

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
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
    containerStats.style.display = "none";
    addCard(eventsFilter);
  } else if (indexArrow == 2) {
    sliderTitle.innerText = "Eventos próximos";
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
    containerStats.style.display = "none";
    upcommingEvents();
  } else if (indexArrow == 3) {
    sliderTitle.innerText = "Eventos pasados";
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
    containerStats.style.display = "none";
    pastEvents();
  } else if (indexArrow == 4) {
    sliderTitle.innerText = "Contáctame";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksContact.classList.add("active");
    containerStats.style.display = "none";
    contact();
  } else if (indexArrow == 5) {
    sliderTitle.innerText = "Estadísticas";
    containerStats.style.display = "flex";
    containerEvents.style.display = "none";
    containerContact.style.display = "none";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksStats.classList.add("active");
    stats();
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
    stats();
    sliderTitle.innerText = "Estadísticas";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksStats.classList.add("active");
    containerEvents.style.display = "none";
    containerContact.style.display = "none";
    containerStats.style.display = "flex";
  } else if (indexArrow == 4) {
    sliderTitle.innerText = "Contáctame";
    checkAllEvents.checked = false;
    checkUpcommingEvents.checked = false;
    checkPastEvents.checked = false;
    navbarLinksStats.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksContact.classList.add("active");
    contact();
    containerStats.style.display = "none";
  } else if (indexArrow == 3) {
    sliderTitle.innerText = "Eventos pasados";
    pastEvents();
    containerStats.style.display = "none";
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
  } else if (indexArrow == 2) {
    sliderTitle.innerText = "Eventos próximos";
    upcommingEvents();
    containerStats.style.display = "none";
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
  } else if (indexArrow == 1) {
    sliderTitle.innerText = "Inicio";
    addCard(eventsFilter);
    containerStats.style.display = "none";
    containerEvents.style.display = "block";
    containerContact.style.display = "none";
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

  const data = eventsFilter.filter((lett) =>
    lett.name.toLowerCase().includes(letter.toLowerCase())
  );

  const filterUppercomming = cardFilter.filter((name) =>
    name.name.toLowerCase().includes(letter.toLowerCase())
  );

  const filterPast = cardFilterPast.filter((name) =>
    name.name.toLowerCase().includes(letter.toLowerCase())
  );

  if (data.length == 0) {
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(cardsEvents);
  } else if (checkUpcommingEvents.checked == true) {
    addCard(filterUppercomming);
  } else if (checkPastEvents.checked == true) {
    addCard(filterPast);
  } else {
    addCard(data);
    sliderTitle.innerText = "Inicio";
    navbarLinksHome.classList.add("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksPast.classList.remove("active");
  }
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

    if (window.innerWidth === 390) {
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
    } else if (window.innerWidth >= 768) {
      if (window.scrollY >= 70) {
        header.style.borderBottom = "none";
        header.style.backgroundColor = "#fdfdfd";
        header.style.transition = ".5s";
        menuContainer.style.backgroundColor = "transparent";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#1e1e1e"));
      } else {
        header.style.borderBottom = "1px solid #fdfdfd";
        header.style.backgroundColor = "transparent";
        menuContainer.style.backgroundColor = "transparent";
        navbarLinks.forEach((navbar) => (navbar.style.color = "#fdfdfd"));
      }
    }
  });
}

windowScroll();

const firstName = document.querySelector("#firstName");
const btnSubmit = document.querySelector(".btn-disable");
const email = document.querySelector("#mail");
const messageInput = document.querySelector("#message");
const messageContainer = document.querySelector(".messageContainer");
const messageValidate = document.createElement("p");
const form = document.querySelector(".form");
const er =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

btnSubmit.disabled = true;

firstName.addEventListener("blur", inputValue);
email.addEventListener("blur", inputValue);
messageInput.addEventListener("blur", inputValue);
btnSubmit.addEventListener("click", sendEmail);

function inputValue(e) {
  if (e.target.value.length > 0) {
    e.target.classList.remove("border-error");
    e.target.classList.add("border-correct");
  } else {
    e.target.classList.add("border-error");
    e.target.classList.remove("border-correct");
  }

  if (e.target.type === "email") {
    if (er.test(e.target.value)) {
      e.target.classList.remove("border-error");
      e.target.classList.add("border-correct");
    } else {
      e.target.classList.remove("border-correct");
      e.target.classList.add("border-error");
    }
  }

  if (
    firstName.className.includes("border-correct") &&
    email.className.includes("border-correct") &&
    messageInput.className.includes("border-correct")
  ) {
    messageContainer.style.display = "none";
    btnSubmit.disabled = false;
    btnSubmit.classList.remove("btn-disable");
  } else {
    btnSubmit.disabled = true;
    btnSubmit.classList.add("btn-disable");
    messageValidate.classList.add("message-error");
    showMessage("Todos los campos son obligatorios");
  }
}

function showMessage(message) {
  messageValidate.innerHTML = message;
  messageContainer.appendChild(messageValidate);
}

function sendEmail(e) {
  e.preventDefault();

  btnSubmit.disabled = true;
  btnSubmit.classList.add("btn-disable");

  const spinner = document.querySelector("#spinner");
  spinner.style.display = "flex";

  setTimeout(() => {
    spinner.style.display = "none";

    firstName.classList.remove("border-correct");
    email.classList.remove("border-correct");
    messageInput.classList.remove("border-correct");
    messageContainer.style.display = "block";
    messageValidate.classList.add("message-correct");
    showMessage("Mensaje enviado correctamente!");

    setTimeout(() => {
      messageContainer.style.display = "none";
      resetForm();
    }, 3000);
  }, 3000);
}

function resetForm() {
  form.reset();
}
