const container = document.querySelector("div#container");

const sidebar = document.createElement("div");
sidebar.setAttribute("id", "sidebar");
container.appendChild(sidebar);
const navBar = document.createElement("nav");
navBar.setAttribute("id", "nav-bar");
sidebar.appendChild(navBar);
const todosButton = document.createElement("button");
todosButton.classList.toggle("nav-buttons");
todosButton.textContent = "Todos";
navBar.appendChild(todosButton);
const projectsButton = document.createElement("button");
projectsButton.classList.toggle("nav-buttons");
projectsButton.textContent = "Projects";
navBar.appendChild(projectsButton);