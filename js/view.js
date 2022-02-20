class View {
    _parentEl;

    displayTodo(data) {
        if(data === undefined) {
            this.#displayErrorMessage();
            return;
        }
        this._parentEl = document.querySelector(".overlay__todo__list");
        this._parentEl.insertAdjacentHTML("afterbegin", this.#renderTodo(data))
        this.#clear()
    }

    #renderTodo(data) {
        return `
        <li class="overlay__todo__list-item">
            <div class="round">
                <input type="checkbox" id="checkbox${data.id}" class="checkbox"/>
                <label for="checkbox${data.id}"></label>
            </div>
            <span>${data.text}</span>
        </li>
        `
    }

    completeTodo(e) {
        const clicked = e.target;

        // toggle class 'completed',  on sibling
        this._parentEl = clicked.closest(".overlay__todo__list-item");
        const sibling = this._parentEl.querySelector("span");
        sibling.classList.toggle("completed");

        this._parentEl.classList.toggle("completed")
    }

    #clear() {
        this._parentEl = document.querySelector(".overlay__todo__input");
        this._parentEl.querySelector("#todo").value = ""
    }

    updateInformation(element, data) {
        let length = Object.keys(data).length;
        element.innerText = `${length} tasks left`;
    }

    #displayErrorMessage() {
        // todo display a pop up box in the right top corner
    }

    deleteTodoFromDOM() {
        const todos = Array.from(document.querySelectorAll(".overlay__todo__list-item"));
        const completedTodos = todos.filter(todo => todo.querySelector(".completed"))

        completedTodos.forEach(todo => {
            todo.closest(".overlay__todo__list-item").remove()
        })
    }

    filterTodos() {
        
    }

}

export default new View()