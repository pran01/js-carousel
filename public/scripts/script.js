let nameField = document.querySelector("#name");
let languageField = document.querySelector("#language");
let stateField = document.querySelector("#state");
let greeting = document.querySelector("#greeting");
let skill = document.querySelector("#skill");
let residence = document.querySelector("#residence");
let nextBtn = document.querySelector("#next-btn");
let prevBtn = document.querySelector("#prev-btn");

let currentSlideId = 1;
let totalSlides = 3;

const changeName = () => {
  let name = nameField.value;
  greeting.innerText = `Hello World, my name is ${name}`;
  nameField.value = "";
};

const changeLanguage = () => {
  let language = languageField.value;
  skill.innerText = `I love building things with ${language}`;
  languageField.value = "";
};

const changeState = () => {
  let state = stateField.value;
  residence.innerText = `I am a proud resident of ${state}`;
  stateField.value = "";
};

const goNext = () => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.classList.toggle("hidden");
  let nextSlideId = (currentSlideId + 1) % (totalSlides + 1);
  if (nextSlideId == 0) nextSlideId = 1;
  let nextSlide = document.querySelector(`#slide-${nextSlideId}`);
  nextSlide.classList.toggle("hidden");
  currentSlideId = nextSlideId;
};

const goPrev = () => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.classList.toggle("hidden");
  let prevSlideId = currentSlideId - 1;
  if (prevSlideId == 0) prevSlideId = totalSlides;
  let prevSlide = document.querySelector(`#slide-${prevSlideId}`);
  prevSlide.classList.toggle("hidden");
  currentSlideId = prevSlideId;
};

const changeColor = (val) => {
  let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
  currentSlide.style.backgroundColor = val;
};

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);
