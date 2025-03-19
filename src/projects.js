import {v4 as uuidv4} from "uuid";
import { setArrayLocalStorage, getArrayLocalStorage } from "./data-persistense";

class Project {
    constructor(title, description){
        this.id = uuidv4();
        this.title = title;
        this.description = description;
    }
}
const projectsList = [];
getArrayLocalStorage("localProjectsList", projectsList);

export function createProject(projetTitle, projectDescription){
    projectsList.push(new Project(projetTitle, projectDescription));
    setArrayLocalStorage("localProjectsList", projectsList);
}
export function getProject(uniqueId){
    return projectsList.find((item) => item.id == uniqueId);
}
export function deleteProject(uniqueId){
    const indexOfItem = projectsList.findIndex((item) => item.id == uniqueId);
    if(!indexOfItem == -1){
        projectsList.splice(indexOfItem, 1);
    }
    setArrayLocalStorage("localProjectsList", projectsList);
}
export function getProjectsList(){
    return projectsList;
}