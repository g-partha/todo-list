import { getProjectsList } from "./projects";
import { createTodo } from "./todos";

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

function openTodoForm(action, todoUniqueId){ //todoUniqueId is only required for action === "update"
    if(document.querySelector("#todo-form-container")){
        content.removeChild(document.querySelector("#todo-form-container"));
    }
    const todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("form-containers");
    todoFormContainer.setAttribute("id", "todo-form-container");
    content.appendChild(todoFormContainer);

    const todoForm = document.querySelector("form");
    todoForm.classList.add("forms");
    todoFormContainer.appendChild(todoForm);

    const titleContainer = document.createElement("div");
    titleContainer.classList.add("text-input-containers");
    todoForm.appendChild(titleContainer);
    const titleInputLabel = document.createElement("label");
    titleInputLabel.classList.add("text-input-labels");
    titleInputLabel.setAttribute("for", "title-input");
    titleInputLabel.textContent = "Title";
    titleContainer.appendChild(titleInputLabel);
    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("id", "title-input");
    titleInput.classList.add("text-inputs");

    const descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("text-input-containers");
    todoForm.appendChild(descriptionContainer);
    const descriptionInputLabel = document.createElement("label");
    descriptionInputLabel.classList.add("text-input-labels");
    descriptionInputLabel.setAttribute("for", "description-input");
    descriptionInputLabel.textContent = "Description";
    descriptionContainer.appendChild(descriptionInputLabel);
    const descriptionInput = document.createElement("input");
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("name", "description");
    descriptionInput.setAttribute("id", "description-input");
    descriptionInput.classList.add("text-inputs");

    const projectContainer = document.createElement("div");
    projectContainer.setAttribute("id", "project-container");
    todoForm.appendChild(projectContainer);
    const projectSelectLabel = document.createElement("label");
    projectSelectLabel.setAttribute("for", "project-select");
    projectSelectLabel.setAttribute("id", "project-select-label");
    projectSelectLabel.textContent = "Project";
    projectContainer.appendChild(projectSelectLabel);
    const projectSelect = document.createElement("select");
    projectSelect.setAttribute("id", "project-select");
    projectSelect.setAttribute("name", "project");
    projectContainer.appendChild(projectSelect);
    const projectOptions = [];
    for(let i = 0; i < getProjectsList().length; i++){
        projectOptions[i] = document.createElement("option");
        projectOptions[i].setAttribute("value", getProjectsList()[i].id);
        projectOptions[i].textContent = getProjectsList()[i].title;
        projectSelect.appendChild(projectOptions[i]);
    }

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");
    todoForm.appendChild(buttonsContainer);
    const submitButton = document.createElement("button");
    submitButton.classList.add("submit-button");
    if(action === "create"){
        submitButton.textContent = "Create";
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            createTodo(titleInput.value, descriptionInput.value, projectSelect.value, );
            content.removeChild(document.querySelector("#todo-form-container"));
        });
    } else if(action === "update"){
        submitButton.textContent = "Update";
        submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            updateTodo(todoUniqueId, titleInput.value, descriptionInput.value, projectSelect.value, );
            content.removeChild(document.querySelector("#todo-form-container"));
        });
    }
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.removeChild(document.querySelector("#todo-form-container"));
    });


}

openTodoForm("create");