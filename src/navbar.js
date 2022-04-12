// spell-checker:ignore bigbite
const navbarTabs = ["home", "menu", "contact"];

export function displayNavbar() {
  const body = document.querySelector("body");
  const header = document.createElement("header");

  const navbar = document.createElement("nav");
  navbarTabs.forEach((element) => {
    const tab = document.createElement("a");
    tab.classList.add(element.toLowerCase());
    tab.innerHTML = element.toUpperCase();
    navbar.append(tab);
  });

  const logoContainer = document.createElement("div");
  logoContainer.classList.add("logo-container");

  const logoText = document.createElement("p");
  logoText.classList.add("logo-text");
  logoText.innerHTML = "BIGBITE";

  const logoIcon = document.createElement("lord-icon");
  logoIcon.classList.add("logo");
  logoIcon.src = "https://cdn.lordicon.com/coqbeapw.json";
  logoIcon.trigger = "hover";
  logoIcon.colors = "primary:#f5f5f5,secondary:#f5f5f5";
  logoIcon.style = "width:70px;height:70px";

  logoContainer.append(logoText);
  logoContainer.append(logoIcon);
  header.append(navbar);
  header.append(logoContainer);
  body.append(header);
  body.insertBefore(header, body.firstChild);
}