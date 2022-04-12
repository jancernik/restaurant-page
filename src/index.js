import "./style.css";
import { displayNavbar } from "./navbar";
import { createHome, displayHome, hideHome } from "./pages/home";
import { createMenu, displayMenu, hideMenu } from "./pages/menu";
import { createContact, displayContact, hideContact } from "./pages/contact";

displayNavbar();

createHome();
createMenu();
createContact();

const homeContent = document.getElementById("home");
homeContent.classList.add("active");

const content = document.getElementById("content");
const navbar = document.querySelector("nav");

const marker = document.createElement("div");
marker.classList.add("marker");
navbar.append(marker);

const navbarTabs = document.querySelectorAll("nav a");
navbarTabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    if (document.querySelector(".transition") == null) {
      marker.style.left =
        e.target.offsetLeft + e.target.offsetWidth / 20 + "px";
      marker.style.width =
        e.target.offsetWidth - e.target.offsetWidth / 10 + "px";
      navbarTabs.forEach((tab) => {
        tab.classList.remove("active");
      });
      e.target.classList.add("active");
      if (e.target.classList.contains("home")) {
        setTimeout(function () {
          hideMenu();
          hideContact();
        }, 600);
        displayHome();
      } else if (e.target.classList.contains("menu")) {
        setTimeout(function () {
          hideHome();
          hideContact();
        }, 600);
        displayMenu();
      } else if (e.target.classList.contains("contact")) {
        setTimeout(function () {
          hideHome();
          hideMenu();
        }, 600);
        displayContact();
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".home").click();
});

const logoContainer = document.querySelector(".logo-container");

document.querySelector(".menu-text a").addEventListener("click", () => {
  document.querySelector(".menu").click();
});

logoContainer.addEventListener("click", () => {
  document.querySelector(".home").click();
});

let mouseHasLeft = true;
const logoText = document.querySelector(".logo-text");
logoContainer.addEventListener("mouseover", () => {
  if (!logoText.classList.contains("playing") && mouseHasLeft === true) {
    logoText.classList.add("playing");
    setTimeout(function () {
      logoText.classList.remove("playing");
    }, 1800);
    mouseHasLeft = false;
  }
});
logoContainer.addEventListener("mouseout", () => {
  mouseHasLeft = true;
});

const menuImages = document.querySelectorAll("#menu img");
menuImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.nextSibling.classList.add("active");
  });
  image.addEventListener("mouseout", () => {
    image.nextSibling.classList.remove("active");
  });
});
