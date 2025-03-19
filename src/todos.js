import {v4 as uuidv4} from "uuid";
import { setArrayToLocalStorage, getArrayFromLocalStorage } from "./data-persistense";

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
export function recoverTodosFromLocalStorage(){
    getArrayFromLocalStorage("localTodosList", todosList);
}
export function createTodo(todoTitle, todoDescription, todoDueDate, todoPriority, todoCompletionStatus){
    todosList.push(new Todo(todoTitle, todoDescription, todoDueDate, todoPriority, todoCompletionStatus));
    setArrayToLocalStorage("localTodosList", todosList);
}
export function getTodo(uniqueId){
    return todosList.find((item) => item.id === uniqueId);
}

// The findIndex() method of Array instances returns the index of the first element
// in an array that satisfies the provided testing function. If no elements satisfy
// the testing function, -1 is returned.

export function deleteTodo(uniqueId){
    const indexOfItem = todosList.findIndex((item) => item.id === uniqueId);
    if(indexOfItem !== -1){
        todosList.splice(indexOfItem, 1);
        setArrayToLocalStorage("localTodosList", todosList);
    }
}
export function updateTodo(uniqueId, key, updatedValue){
    const indexOfItem = todosList.findIndex((item) => item.id === uniqueId);
    if(indexOfItem !== -1){
        todosList[indexOfItem][key] = updatedValue;
        setArrayToLocalStorage("localTodosList", todosList);
    }
}
export function getTodosList(){
    return todosList;
}