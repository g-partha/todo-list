import {createTodo, getTodo, deleteTodo, getTodosList} from "./todos";
import {createProject, getProject, deleteProject, getProjectsList} from "./projects";


// Console tests

function colnsoleTests(){
    createProject("Maths", "this is a maths project");
    createProject("Physics", "this is a physics project");
    createProject("Biology", "this is a biology project");
    
    console.log(getProjectsList().slice());

    deleteProject("e4c6e837-19ad-415c-882d-e87e4191c04c");

    console.log(getProjectsList().slice());


}

function logProjects(){
    console.log(getProjectsList().slice());
}

colnsoleTests();

