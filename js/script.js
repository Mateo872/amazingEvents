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

let eventsFilter = [];

async function init() {
  await fetch("./js/AmazingEvents.json").then((resp) =>
    resp.json().then((json) => (eventsFilter = json.events))
  );
  addCard(eventsFilter);
}

init();

let cards = [];

let sliderTitle = document.querySelector(".slider-title");

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

  eventsCategory(cardFilter);

  if (cardFilter) {
    addCard(cardFilter);
  }

  indexArrow = 2;

  navbarLinksHome.classList.remove("active");
  navbarLinksPast.classList.remove("active");
  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksUpcomming.classList.add("active");
  sliderTitle.innerText = "Eventos próximos";
  timeOut();
  checkUpdate();
}

let cardFilterPast = [];

function pastEvents() {
  cardFilterPast = eventsFilter.filter((estimate) => estimate.assistance);

  eventsCategory(cardFilterPast);

  if (cardFilterPast) {
    addCard(cardFilterPast);
  }

  indexArrow = 3;

  navbarLinksContact.classList.remove("active");
  navbarLinksStats.classList.remove("active");
  navbarLinksHome.classList.remove("active");
  navbarLinksUpcomming.classList.remove("active");
  navbarLinksPast.classList.add("active");
  sliderTitle.innerText = "Eventos pasados";
  timeOut();
  checkUpdate();
}

const categoryContainer = document.querySelector(".category-input__container");

let checkboxState = {};

function eventsCategory(category) {
  const categories = category.map((event) => event.category);
  const unique = new Set(categories);

  const checkbox = document.querySelectorAll(".input");

  checkbox.forEach((check) => {
    checkboxState[check.id] = check.checked;
  });

  categoryContainer.innerHTML = ``;

  const lastCategories = [...unique];

  lastCategories.map((event) => {
    categoryContainer.innerHTML += `
      <div class="category-input ${event}">
        <input type="checkbox" name="${event}" id="${event}" class="input" />
        <label class="label-check" for="${event}">
          ${event}
        </label>
      </div>
      `;
  });
}

function updateCheckboxes() {
  const checkbox = document.querySelectorAll(".input");

  checkbox.forEach((check) => {
    if (checkboxState[check.id] === true) {
      check.checked = true;
    } else {
      check.checked = false;
    }
  });
}

function checked(e) {
  const valueCheck = e.target.id;

  if (valueCheck === "allEvents") {
    indexArrow = 1;

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

    inputSearch.value = "";
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksUpcomming.classList.add("active");
    upcommingEvents();
  } else if (valueCheck === "pastEvents") {
    indexArrow = 3;

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
        <td>${capacity[0].name} con ${parseFloat(
    capacity[0].capacity
  ).toLocaleString("es")} personas</td>
        <td>${capacity[1].name} con ${parseFloat(
    capacity[1].capacity
  ).toLocaleString("es")} personas</td>
        <td>${capacity[2].name} con ${parseFloat(
    capacity[2].capacity
  ).toLocaleString("es")} personas</td>
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
        <td>$${parseFloat(
          revenues[0].price * revenues[0].estimate
        ).toLocaleString("es")}</td>
        <td>$${parseFloat(
          revenues[1].price * revenues[1].estimate
        ).toLocaleString("es")}</td>
        <td>$${parseFloat(
          revenues[2].price * revenues[2].estimate
        ).toLocaleString("es")}</td>
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
      <td>$${parseFloat(
        cardFilterPast[0].price * cardFilterPast[0].assistance
      ).toLocaleString("es")}</td>
      <td>$${parseFloat(
        cardFilterPast[1].price * cardFilterPast[1].assistance
      ).toLocaleString("es")}</td>
      <td>$${parseFloat(
        cardFilterPast[2].price * cardFilterPast[2].assistance
      ).toLocaleString("es")}</td>
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

  inputSearch.value = "";

  if (inputSearch.value === "") {
    container_slider.style.display = "block";
  }

  if (indexArrow == 1) {
    sliderTitle.innerText = "Inicio";

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

    navbarLinksContact.classList.remove("active");
    navbarLinksHome.classList.remove("active");
    navbarLinksPast.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksStats.classList.add("active");
    stats();
  }
  checkUpdate();
}

function arrowMinus() {
  timeOut();

  if (indexArrow == 1) {
    indexArrow = 5;
  } else {
    indexArrow--;
  }

  inputSearch.value = "";

  if (inputSearch.value === "") {
    container_slider.style.display = "block";
  }

  if (indexArrow == 5) {
    stats();
    sliderTitle.innerText = "Estadísticas";

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

    navbarLinksPast.classList.remove("active");
    navbarLinksContact.classList.remove("active");
    navbarLinksStats.classList.remove("active");
    navbarLinksUpcomming.classList.remove("active");
    navbarLinksHome.classList.add("active");
  }
  checkUpdate();
}

function checkUpdate() {
  const checkbox = document.querySelectorAll(".input");

  checkbox.forEach((check) => {
    check.addEventListener("click", (e) => {
      if (sliderTitle.textContent === "Inicio") {
        addCard(
          eventsFilter.filter((id) => id.category === e.currentTarget.id)
        );
      }

      if (sliderTitle.textContent === "Eventos próximos") {
        addCard(cardFilter.filter((id) => id.category === e.currentTarget.id));
      }

      if (sliderTitle.textContent === "Eventos pasados") {
        addCard(
          cardFilterPast.filter((id) => id.category === e.currentTarget.id)
        );
      }

      checkedTrue();
    });
  });
}

const container_slider = document.querySelector(".container_slider");

function checkedTrue() {
  const checkbox = document.querySelectorAll(".input");

  checkbox.forEach((check) => {
    check.checked = true;

    check.addEventListener("click", (e) => {
      if (e.target.checked === false && sliderTitle.textContent === "Inicio") {
        eventsCategory(eventsFilter);
        addCard(eventsFilter);
      } else if (
        e.target.checked === false &&
        sliderTitle.textContent === "Eventos próximos"
      ) {
        eventsCategory(cardFilter);
        addCard(cardFilter);
      } else if (
        e.target.checked === false &&
        sliderTitle.textContent === "Eventos pasados"
      ) {
        eventsCategory(cardFilterPast);
        addCard(cardFilterPast);
      }
      inputSearch.value = "";
    });
  });
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

  const checkbox = document.querySelectorAll(".input");

  let checkFiltered = [];

  checkbox.forEach((check) => {
    const filterCheck = eventsFilter.filter(
      (event) => event.category === check.id
    );

    checkFiltered = filterCheck.filter((event) =>
      event.name.toLowerCase().includes(letter.toLowerCase())
    );

    if (check.checked === false) {
      if (sliderTitle.textContent === "Inicio") {
        if (data.length === 0) {
          cardsContainer.innerHTML = "";
          cardsContainer.appendChild(cardsEvents);
          container_slider.style.display = "none";
        } else {
          addCard(data);
          container_slider.style.display = "block";
        }
      } else if (sliderTitle.textContent === "Eventos próximos") {
        if (filterUppercomming.length === 0) {
          cardsContainer.innerHTML = "";
          cardsContainer.appendChild(cardsEvents);
          container_slider.style.display = "none";
        } else {
          addCard(filterUppercomming);
          container_slider.style.display = "block";
        }
      } else if (sliderTitle.textContent === "Eventos pasados") {
        if (filterPast.length === 0) {
          cardsContainer.innerHTML = "";
          cardsContainer.appendChild(cardsEvents);
          container_slider.style.display = "none";
        } else {
          addCard(filterPast);
          container_slider.style.display = "block";
        }
      }
    } else {
      if (checkFiltered.length === 0) {
        cardsContainer.innerHTML = "";
        cardsContainer.appendChild(cardsEvents);
        container_slider.style.display = "none";
      } else {
        addCard(checkFiltered);
        container_slider.style.display = "block";
      }
      checkedTrue();
    }
  });
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
  eventsCategory(data);
  checkUpdate();
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
  btnSubmit.style.pointerEvents = "none";

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
