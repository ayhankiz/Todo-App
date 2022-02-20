import {
    state,
    getTodo,
    setStateToCompleted,
    countActiveTasks,
    deleteTodoFromState } from "./model.js";
import View  from "./view.js"

const todoInformation = document.querySelector(".todo__bottom-content-amount")

const btnDelete = document.querySelector("#btnDelete");
const btnAll = document.querySelector("#btnAll");
const btnActive = document.querySelector("#btnActive");
const btnCompleted = document.querySelector("#btnCompleted");

const counterTodo = function() {
    const todos = Array.from(document.querySelectorAll(".overlay__todo__list-item"));
    return todos.length -1
}

const updateTasks = function(e) {
    // set state from todo from active to completed
    setStateToCompleted(e.target)
    return countActiveTasks();
}

document.addEventListener("submit", function(e) {
    // 1.) drevent form from submitting
    e.preventDefault()

    // 2.) fill state with todos 
    getTodo()

    // 3.) display todo and clear input
    View.displayTodo(state.todos[counterTodo()])

    //4.) update infos
    View.updateInformation(todoInformation, state.todos)
})

document.addEventListener("click", function(e) {
    if(e.target.classList.contains("checkbox")) {
        View.completeTodo(e)
        const counter = updateTasks(e)
        View.updateInformation(todoInformation, counter)
    }
})

btnDelete.addEventListener("click", function() {
    state.todos = deleteTodoFromState(state.todos)
    View.deleteTodoFromDOM()
})


// Filter

document.addEventListener("click", function(e) {
    if(e.target.id === "btnAll"){
        
    }
    if(e.target.id === "btnActive"){
        console.log("btnActive")
    }
    if(e.target.id === "btnCompleted"){
        console.log("btnCompleted")
    }
})