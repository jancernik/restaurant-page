// spell-checker:disable
import burger1 from "../assets/menu/burger1.png";
import burger2 from "../assets/menu/burger2.png";
import burger3 from "../assets/menu/burger3.png";
import burger4 from "../assets/menu/burger4.png";
import burger5 from "../assets/menu/burger5.png";
import burger6 from "../assets/menu/burger6.png";

const menuData = [
  {
    img: burger1,
    title: "ONION CRISP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$7.45",
  },
  {
    img: burger2,
    title: "SPICY VEGGIE",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$8.25",
  },
  {
    img: burger3,
    title: "FLUFFY RIBS",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$8.60",
  },
  {
    img: burger4,
    title: "PURPLE TOWER",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$8.60",
  },
  {
    img: burger5,
    title: "CHICKEN DIP",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$7.90",
  },
  {
    img: burger6,
    title: "SMOKED PORK",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed necessitatibus vitae aliquam vero, deleniti quam.",
    price: "$9.15",
  },
];

const content = document.getElementById("content");

export function createMenu() {
  const menuContent = document.createElement("div");
  menuContent.setAttribute("id", "menu");

  menuData.forEach((element) => {
    const elementContainer = document.createElement("div");
    const imageWrapper = document.createElement("div");
    const image = document.createElement("img");
    image.src = element.img;

    const info = document.createElement("div");
    info.classList.add("menu-info");
    const title = document.createElement("p");
    title.classList.add("menu-title");
    title.innerHTML = element.title;
    const price = document.createElement("p");
    price.classList.add("menu-price");
    price.innerHTML = element.price;

    const description = document.createElement("p");
    description.classList.add("menu-description");
    description.innerHTML = element.description.toUpperCase();

    imageWrapper.append(image);
    imageWrapper.append(description);
    info.append(title);
    info.append(price);
    elementContainer.append(imageWrapper);
    elementContainer.append(info);
    menuContent.append(elementContainer);
  });
  content.append(menuContent);
}

export function displayMenu() {
  const menuContent = document.getElementById("menu");
  menuContent.classList.add("active");
  menuContent.classList.add("transition");
  setTimeout(function () {
    menuContent.classList.remove("transition");
  }, 600);
}

export function hideMenu() {
  const menuContent = document.getElementById("menu");
  menuContent.classList.remove("active");
}
