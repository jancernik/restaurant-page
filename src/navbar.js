export function displayNavbar() {
  const buttons = ["home", "menu", "about"];
  const body = document.querySelector("body");
  const content = document.getElementById("content");
  const header = document.createElement("header");
  buttons.forEach((element) => {
    const button = document.createElement("button");
    button.classList.add(element);
    header.append(button);
    button.innerHTML = element.toUpperCase();
  });
  document.querySelector("body").append(header);
  body.insertBefore(header, body.firstChild);
}
