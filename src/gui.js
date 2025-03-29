import { getProjectsList } from "./projects";
import { createTodo, getTodosList, updateTodo } from "./todos";

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
container.appendChild(content);

function openTodoForm(action, todoUniqueId){ //todoUniqueId is only required for action === "update"
    if(document.querySelector("#todo-form-container")){
        content.removeChild(document.querySelector("#todo-form-container"));
    }
    const todoFormContainer = document.createElement("div");
    todoFormContainer.classList.add("form-containers");
    todoFormContainer.setAttribute("id", "todo-form-container");
    content.appendChild(todoFormContainer);

    const todoForm = document.createElement("form");
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
    titleContainer.appendChild(titleInput);

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
    descriptionContainer.appendChild(descriptionInput);

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

    const dueDateContainer = document.createElement("div");
    dueDateContainer.setAttribute("id", "due-date-container");
    todoForm.appendChild(dueDateContainer);
    const dueDateInputLabel = document.createElement("label");
    dueDateInputLabel.setAttribute("for", "due-date-input");
    dueDateInputLabel.setAttribute("id", "due-date-input-label");
    dueDateInputLabel.textContent = "Due date";
    dueDateContainer.appendChild(dueDateInputLabel);
    const dueDateInput = document.createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("id", "due-date-input");
    dueDateInput.setAttribute("name", "due_date");
    dueDateContainer.appendChild(dueDateInput);

    const priorityContainer = document.createElement("div");
    priorityContainer.setAttribute("id", "priority-container");
    todoForm.appendChild(priorityContainer);
    const prioritySelectLabel = document.createElement("label");
    prioritySelectLabel.setAttribute("for", "priority-select");
    prioritySelectLabel.setAttribute("id", "priority-select-label");
    prioritySelectLabel.textContent = "Priority";
    priorityContainer.appendChild(prioritySelectLabel);
    const prioritySelect = document.createElement("select");
    prioritySelect.setAttribute("id", "priority-select");
    prioritySelect.setAttribute("name", "priority");
    priorityContainer.appendChild(prioritySelect);
    const priorityOne = document.createElement("option");
    priorityOne.setAttribute("id", "priority-one");
    priorityOne.value = "P1";
    priorityOne.textContent = "P1"
    prioritySelect.appendChild(priorityOne);
    const priorityTwo = document.createElement("option");
    priorityTwo.setAttribute("id", "priority-two");
    priorityTwo.value = "P2";
    priorityTwo.textContent = "P2"
    prioritySelect.appendChild(priorityTwo);
    const priorityThree = document.createElement("option");
    priorityThree.setAttribute("id", "priority-three");
    priorityThree.value = "P3";
    priorityThree.textContent = "P3"
    prioritySelect.appendChild(priorityThree);
    const priorityFour = document.createElement("option");
    priorityFour.setAttribute("id", "priority-four");
    priorityFour.value = "P4";
    priorityFour.setAttribute("selected", "");
    priorityFour.textContent = "P4"
    prioritySelect.appendChild(priorityFour);

    const completionStatusFieldset = document.createElement("fieldset");
    completionStatusFieldset.setAttribute("id", "completion-status-fieldset");
    todoForm.appendChild(completionStatusFieldset);
    const completionStatusLegend = document.createElement("legend");
    completionStatusLegend.textContent = "Completed";
    completionStatusFieldset.appendChild(completionStatusLegend);
    const completedContainer = document.createElement("div");
    completedContainer.classList.add("radio-button-container");
    completionStatusFieldset.appendChild(completedContainer);
    const completedRadio = document.createElement("input");
    completedRadio.setAttribute("type", "radio");
    completedRadio.setAttribute("id", "completed-radio");
    completedRadio.setAttribute("name", "completion_radio");
    completedRadio.value = "Completed";
    completedContainer.appendChild(completedRadio);
    const completedLabel = document.createElement("label");
    completedLabel.classList.add("completion-radio-label");
    completedLabel.setAttribute("for", "completed-radio");
    completedLabel.textContent = "Yes";
    completedContainer.appendChild(completedLabel);
    const notCompletedContainer = document.createElement("div");
    notCompletedContainer.classList.add("radio-button-container");
    completionStatusFieldset.appendChild(notCompletedContainer);
    const notCompletedRadio = document.createElement("input");
    notCompletedRadio.setAttribute("type", "radio");
    notCompletedRadio.setAttribute("id", "not-completed-radio");
    notCompletedRadio.setAttribute("name", "completion_radio");
    notCompletedRadio.value = "Not completed";
    notCompletedRadio.setAttribute("checked", "");
    notCompletedContainer.appendChild(notCompletedRadio);
    const notCompletedLabel = document.createElement("label");
    notCompletedLabel.classList.add("completion-radio-label");
    notCompletedLabel.setAttribute("for", "not-completed-radio");
    notCompletedLabel.textContent = "No";
    notCompletedContainer.appendChild(notCompletedLabel);


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
    buttonsContainer.appendChild(submitButton);
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("cancel-button");
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", (event) => {
        event.preventDefault();
        content.removeChild(document.querySelector("#todo-form-container"));
    });
    buttonsContainer.appendChild(cancelButton);


}

function showTodosList(){
    const todosListContainer = document.createElement("div");
    todosListContainer.classList.add("lists-view-containers");
    content.appendChild(todosListContainer);

    const todosListView = document.createElement("div");
    todosListView.classList.add("lists-view");
    todosListContainer.appendChild(todosListView);

    const todoNodesArray = [];
    for(let i = 0; i < getTodosList().length; i++){
        const currentTodoId = getTodosList()[i].id;
        todoNodesArray[i] = document.createElement("div");
        todoNodesArray[i].classList.add("todos");
        todosListView.appendChild(todoNodesArray[i]);
        const todoTitleDisplay = document.createElement("div");
        todoTitleDisplay.classList.add("todos-title");
        todoTitleDisplay.textContent = getTodosList()[i].title;
        todoNodesArray[i].appendChild(todoTitleDisplay);
        todoNodesArray[i].addEventListener("click", () => {
            openTodoForm("update", currentTodoId);
            document.querySelector("#title-input").value = getTodosList()[i].title;
            document.querySelector("#description-input").value = getTodosList()[i].description;
            document.querySelector("#project-select").value = getTodosList()[i].project;
            document.querySelector("#due-date-input").value = getTodosList()[i].dueDateLocale;
            if(getTodosList()[i].priority === "P1"){
                document.querySelector("#priority-four").removeAttribute("selected");
                document.querySelector("#priority-one").setAttribute("selected", "");
            } else if(getTodosList()[i].priority === "P2"){
                document.querySelector("#priority-four").removeAttribute("selected");
                document.querySelector("#priority-two").setAttribute("selected", "");
            } else if(getTodosList()[i].priority === "P3"){
                document.querySelector("#priority-four").removeAttribute("selected");
                document.querySelector("#priority-three").setAttribute("selected", "");
            }
            if(getTodosList()[i].completionStatus === "Completed"){
                document.querySelector("#not-completed-radio").removeAttribute("checked");
                document.querySelector("#completed-radio").setAttribute("checked", "");
            }
        })

    }
}

showTodosList();