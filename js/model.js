
export const state = {
    todos: [

    ]
}

const setId = function() {
    // set id for todos
    state.todos.forEach((el, i) => {
        el.id = i;
    })
}

const getIdFromElement = function(e) {
    // get id from element Todo (not the state todo)
    return e.id.at(-1);
}

export const setStateToCompleted = function(e) {
    const id = Number(getIdFromElement(e));
    state.todos.forEach(el => {
        // check if element todo id is the same as state todo id
        if(el.id === id && el.status === "active") {
            el.status = "completed";
            return;
        }
        if(el.id === id && el.status === "completed") {
            el.status = "active";
            return;
        }
    })
}

export const deleteTodoFromState = function(state) {
    return state.filter(el => el.status === "active")
}

export const countActiveTasks = function() {
    const counter = state.todos.filter(el => el.status === "active");
    return counter;
}

export const getTodo = function() {
    const todoValue = document.querySelector("#todo");
    const todo = {
        text: todoValue.value,
        status: "active"
    }
    if(todo.text === ""|| todo.text === null) return;
    state.todos.push(todo)
    setId()
}

