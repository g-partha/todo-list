import {createTodo, getTodo, getTodosByProject, deleteTodo, getTodosList, updateTodo, recoverTodosFromLocalStorage,} from "./todos";
import {createProject, getProject, deleteProject, getProjectsList, updateProject, recoverProjectsFromLocalStorage,} from "./projects";
import "./tests";
import "./todo-ui";
import "./style.css"

recoverTodosFromLocalStorage();
recoverProjectsFromLocalStorage();
