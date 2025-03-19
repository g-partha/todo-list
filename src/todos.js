import {v4 as uuidv4} from "uuid";
import { setArrayLocalStorage, getArrayLocalStorage } from "./data-persistense";

class Todo {
    constructor(title, description, dueDate, priority, completionStatus){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.completionStatus = completionStatus;
    };
}

const todosList = [];
getArrayLocalStorage("localTodosList", todosList);

export function createTodo(todoTitle, todoDescription, todoDueDate, todoPriority, todoCompletionStatus){
    todosList.push(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoCompletionStatus));
    setArrayLocalStorage("localTodosList", todosList);
}
export function getTodo(uniqueId){
    return todosList.find((item) => item.id == uniqueId);
}
export function deleteTodo(uniqueId){
    const indexOfItem = todosList.findIndex((item) => item.id == uniqueId);
    if(!indexOfItem == -1){
        projectsList.splice(indexOfItem, 1);
    }
    setArrayLocalStorage("localTodosList", todosList);
}
export function getTodosList(){
    return todosList;
}