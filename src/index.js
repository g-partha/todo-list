import {createTodo, getTodo, getTodosByProject, deleteTodo, getTodosList, updateTodo, recoverTodosFromLocalStorage,} from "./todos";
import {createProject, getProject, deleteProject, getProjectsList, updateProject, recoverProjectsFromLocalStorage,} from "./projects";
import "./tests";
import "./gui";
import "./style.css"

recoverTodosFromLocalStorage();
recoverProjectsFromLocalStorage();
