const container = document.querySelector("div#container");

const sidebar = document.createElement("div");
sidebar.setAttribute("id", "sidebar");
container.appendChild(sidebar);
const navBar = document.createElement("nav");
navBar.setAttribute("id", "nav-bar");
sidebar.appendChild(navBar);
const todosButton = document.createElement("button");
todosButton.classList.add("nav-buttons");
todosButton.textContent = "Todos";
navBar.appendChild(todosButton);
const projectsButton = document.createElement("button");
projectsButton.classList.add("nav-buttons");
projectsButton.textContent = "Projects";
navBar.appendChild(projectsButton);

const content = document.createElement("div");
content.setAttribute("id", "content");
container.appendChild("content");

function openTodoForm(operation){
    
}