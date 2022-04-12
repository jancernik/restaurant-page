// spell-checker:ignore bigbite
import hamburger from "../assets/home/hamburger.png";

const homeTitles = [
  "BEEFY AND TASTY",
  "MADE WITH LOVE",
  "FLAVOUR BOMBS",
  "MEET PERFECTION",
  "BEEFY AND TASTY",
];

const content = document.getElementById("content");

export function createHome() {
  const homeContent = document.createElement("div");
  homeContent.setAttribute("id", "home");

  const homeImage = document.createElement("img");
  homeImage.src = hamburger;
  homeImage.classList.add("home-image");

  const textWrapper = document.createElement("div");
  textWrapper.classList.add("text-wrapper");

  const welcomeText = document.createElement("div");
  welcomeText.classList.add("welcome-text");
  const welcome = document.createElement("p");
  welcome.innerHTML = "WELCOME TO";
  const bigbite = document.createElement("p");
  bigbite.innerHTML = "BIGBITE";
  bigbite.classList.add("bigbite");

  const title = document.createElement("div");
  title.classList.add("home-title");
  const titleList = document.createElement("ul");
  homeTitles.forEach((element) => {
    const titleContent = document.createElement("li");
    titleContent.innerHTML = element;
    titleList.append(titleContent);
  });

  const menuText = document.createElement("div");
  menuText.classList.add("menu-text");
  const check = document.createElement("p");
  check.innerHTML = "CHECK OUR";
  const menu = document.createElement("a");
  menu.innerHTML = "MENU";
  menu.classList.add("menu");

  welcomeText.append(welcome);
  welcomeText.append(bigbite);
  title.append(titleList);
  menuText.append(check);
  menuText.append(menu);
  textWrapper.append(welcomeText);
  textWrapper.append(title);
  textWrapper.append(menuText);
  homeContent.append(homeImage);
  homeContent.append(textWrapper);
  content.append(homeContent);
}

export function displayHome() {
  const homeContent = document.getElementById("home");
  homeContent.classList.add("active");
  homeContent.classList.add("transition");
  setTimeout(function () {
    homeContent.classList.remove("transition");
  }, 600);
}

export function hideHome() {
  const homeContent = document.getElementById("home");
  homeContent.classList.remove("active");
}


