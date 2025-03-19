import {createTodo, getTodo, deleteTodo, getTodosList, recoverTodosFromLocalStorage, updateTodo} from "./todos";
import {createProject, getProject, deleteProject, getProjectsList, recoverProjectsFromLocalStorage, updateProject} from "./projects";
import "./tests";

recoverTodosFromLocalStorage();
recoverProjectsFromLocalStorage();
