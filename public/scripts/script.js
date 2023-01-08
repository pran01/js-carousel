let nameField = document.querySelector("#name");
let languageField = document.querySelector("#language");
let stateField = document.querySelector("#state");
let greeting = document.querySelector("#greeting");
let skill = document.querySelector("#skill");
let residence = document.querySelector("#residence");
let nextBtn = document.querySelector("#next-btn");
let prevBtn = document.querySelector("#prev-btn");

let currentSlideId;
let totalSlides = 3;

let greetingName;
let skillLanguage;
let residenceState;

let colors;

const getData = () => {
  greetingName = localStorage.getItem("name");
  greetingName = greetingName ? greetingName : "Pranav";
  greeting.innerText = `Hello World, my name is ${greetingName}`;

  skillLanguage = localStorage.getItem("language");
  skillLanguage = skillLanguage ? skillLanguage : "CSS";
  skill.innerText = `I love building things with ${skillLanguage}`;

  residenceState = localStorage.getItem("state");
  residenceState = residenceState ? residenceState : "Bihar";
  residence.innerText = `I am a proud resident of ${residenceState}`;

  currentSlideId = localStorage.getItem("currentSlideId");
  currentSlideId = currentSlideId ? currentSlideId : 1;
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.classList.toggle("hidden");

  colors = JSON.parse(localStorage.getItem("colors"));
  if (!colors) {
    colors = {
      1: "#EDC7B7",
      2: "#EDC7B7",
      3: "#EDC7B7",
    };
  }
  for (key in colors) {
    let currentSlide = document.querySelector(`#slide-${key}`);
    currentSlide.style.backgroundColor = colors[key];
  }
};

const changeName = () => {
  let name = nameField.value;
  greeting.innerText = `Hello World, my name is ${name}`;
  nameField.value = "";
  localStorage.setItem("name", name);
};

const changeLanguage = () => {
  let language = languageField.value;
  skill.innerText = `I love building things with ${language}`;
  languageField.value = "";
  localStorage.setItem("language", language);
};

const changeState = () => {
  let state = stateField.value;
  residence.innerText = `I am a proud resident of ${state}`;
  stateField.value = "";
  localStorage.setItem("state", state);
};

const goNext = () => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.classList.toggle("hidden");
  let nextSlideId = (currentSlideId + 1) % (totalSlides + 1);
  if (nextSlideId == 0) nextSlideId = 1;
  let nextSlide = document.querySelector(`#slide-${nextSlideId}`);
  nextSlide.classList.toggle("hidden");
  currentSlideId = nextSlideId;
  localStorage.setItem("currentSlideId", currentSlideId);
};

const goPrev = () => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.classList.toggle("hidden");
  let prevSlideId = currentSlideId - 1;
  if (prevSlideId == 0) prevSlideId = totalSlides;
  let prevSlide = document.querySelector(`#slide-${prevSlideId}`);
  prevSlide.classList.toggle("hidden");
  currentSlideId = prevSlideId;
  localStorage.setItem("currentSlideId", currentSlideId);
};

const changeColor = (val) => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.style.backgroundColor = val;
  colors[currentSlideId] = val;
  localStorage.setItem("colors", JSON.stringify(colors));
};

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);

window.onload = getData;
