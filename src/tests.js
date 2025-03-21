import {createTodo, getTodo, deleteTodo, getTodosList, recoverTodosFromLocalStorage, updateTodo} from "./todos";
import {createProject, getProject, deleteProject, getProjectsList, recoverProjectsFromLocalStorage, updateProject} from "./projects";

function consoleLogTodosAndProjects(){
    // console.log({"Projects List": getProjectsList().slice()});
    console.log(
        "%c Projects List:",
        "color: white; background-color:rgb(15, 85, 31); padding: 2px 6px; border-radius: 4px; font-weight: bold;",
        getProjectsList().slice()
      );
    console.log("%c Todos List",
        "color: white; background-color:rgb(126, 50, 15); padding: 2px 6px; border-radius: 4px; font-weight: bold;",
        getTodosList().slice());
}

function consoleLogTestName(testName){
    console.log("");
    console.log(`%c ${testName}`, "font-weight: bold; font-size: 18px; background-color: navy;");
}

let projectIdIncrement = 100; // This is to override uuid for projects
let todoIdIncrement = 9000; // This is to override uuid for todos

function createTestProject(testTitle, testDescription){
    createProject(testTitle, testDescription);
    const projectListArray = getProjectsList();
    projectListArray.at(-1).id = projectIdIncrement.toString(); //Array[] does not support negative index
    projectIdIncrement++;
}

function createTestTodo(testTitle, testDescription, testDueDate, testPriority, testCompletionStatus){
    createTodo(testTitle, testDescription, testDueDate, testPriority, testCompletionStatus);
    const todoListArray = getTodosList();
    todoListArray.at(-1).id = todoIdIncrement.toString();
    todoIdIncrement++;
}

function testProjectFunctions(){
    consoleLogTestName("Test createProject with uuid overridden");
    createTestProject("Maths", "this is a maths project");
    createTestProject("Physics", "this is a physics project");
    createTestProject("Biology", "this is a biology project");
    consoleLogTodosAndProjects();

    consoleLogTestName("Test deleteProject")
    deleteProject("101");
    consoleLogTodosAndProjects();

    consoleLogTestName("Test getProject");
    console.log(getProject("102"));

    consoleLogTestName("Test updateProject");
    updateProject("100", "description", "this is the updated project description");
    consoleLogTodosAndProjects();
}


function testTodoFunctions(){
    consoleLogTestName("Create todo with uuid overridden");
    createTestTodo("Do homework", "I'm doing homework", "09098888", "low priority", "completed");
    createTestTodo("Buy potato", "I have to buy round potatoes", "09098888", "high priority", "not completed");
    createTestTodo("Boil the milk", "It is in the jug", "09098888", "medium priority", "completed");
    consoleLogTodosAndProjects();

    consoleLogTestName("Test deleteTodo");
    deleteTodo("9001");
    consoleLogTodosAndProjects();

    consoleLogTestName("Test getTodo");
    console.log(getTodo("9000"));

    consoleLogTestName("Test updateTodo");
    updateTodo("9002", "description", "this is the updated todo description");
    consoleLogTodosAndProjects();
}


testProjectFunctions();

testTodoFunctions();







localStorage.clear(); //Added to override recoverTodosFromLocalStorage & recoverProjectsFromLocalStorage.