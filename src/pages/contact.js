const content = document.getElementById("content");

export function createContact() {
  const contactContent = document.createElement("div");
  contactContent.setAttribute("id", "contact");

  const map = document.createElement("iframe");
  map.classList.add("map");
  map.setAttribute("loading", "lazy");
  map.setAttribute("src", "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJvVzbX7vAQIYRq82otEzEhBs&key=AIzaSyDxc5KHBji-WrrmmMGa1rgDO7Q4-gUQmc0");

  contactContent.append(map);
  content.append(contactContent);
}

export function displayContact() {
  const contactContent = document.getElementById("contact");
  contactContent.classList.add("active");
  contactContent.classList.add("transition");
  setTimeout(function () {
    contactContent.classList.remove("transition");
  }, 600);
}

export function hideContact() {
  const contactContent = document.getElementById("contact");
  contactContent.classList.remove("active");
}
