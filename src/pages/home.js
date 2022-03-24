import hamburger from "../assets/home/hamburger.png";

export function displayHome() {
  const content = document.getElementById("content");
  const homeImage = document.createElement("img");
  homeImage.src = hamburger;
  homeImage.classList.add("home-img");
  const homeText = document.createElement("p");
  homeText.classList.add("home-text");
  homeText.innerHTML = "READY TO TRY?";
  content.append(homeImage);
  content.append(homeText);
}
