class Project {
    constructor(title, description){
        this.title = title;
        this.description = description;
    }
}
const projectsList = [];

export function createProject(projetTitle, projectDescription){
    projectsList.push(new Project(projetTitle, projectDescription));
}
export function getProject(index){
    return projectsList[index];
}
export function deleteProject(index){
    projectsList.splice(index, 1);
}
export function getProjectsList(){
    return projectsList;
}