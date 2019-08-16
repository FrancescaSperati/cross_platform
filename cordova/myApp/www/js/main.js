

class TodoList{
    //this class represents the todo list
    
    constructor (){
        //create a map and fill it with the local storage (the to do list)
        this.todos = new Map();
        if (localStorage.getItem('myToDoList')) {
            this.todos = new Map(JSON.parse(localStorage.myToDoList));
        } 
        //linking to all items
        this.todoContainer = document.querySelector(".todo-body");
        this.todoList = document.querySelector(".todo-list");
        this.todoInput = document.querySelector(".todoInput");
        this.removeButton = document.querySelector(".removeText");
        this.bindEvents();
        this.render();
    }

    bindEvents(){
        //events will be:
        
        //enter to add a new item
        this.todoInput.onkeyup = (e) => {
            if(e.keyCode === 13) {
                this.addTodo(e.target.value);
                this.todoInput.value="";
            }
        }

        //check the items to mark them as done or to do
        this.todoList.onmouseup = (e) => {
            if(e.target.checked !== undefined) {
                let id = e.target.getAttribute("data-key");
                this.markTodo(id, e.target.checked);
            }
        }
        
        //delete button click to remove the checked items
        this.removeButton.onclick =this.clean.bind(this);
    }

    markTodo(id, isChecked){
        //marking the item as checked and save it into the storage
        let obj = this.todos.get(id);
        obj.checked = !isChecked;
        this.todos.set(id, obj);
        localStorage.myToDoList = JSON.stringify(Array.from(this.todos.entries()));
        this.render();
    }

    addTodo(text = "Blank Task"){
        //adding a new item to the list and save it into the storage
        let id = Date.now()+"";
        this.todos.set(id, {
            id: id,
            text: text,
            checked: false
        });
        localStorage.myToDoList = JSON.stringify(Array.from(this.todos.entries()));
        this.render();
    }

    clean(){
        //cleaning both, list and storage
        this.todos.forEach((todo, key) => {
            if(todo.checked){
                this.todos.delete(key)
            }
        });
        localStorage.myToDoList = JSON.stringify(Array.from(this.todos.entries()));
        this.render();
    }

    template(item, id){
        //creating a new li tag for the elements to display
        return (`<li class="todo-item ${(item.checked ? "checked" : "")}" data-key="${id}"><input type="checkbox" data-key="${id}" ${(item.checked ? "checked" : "")} />${item.text}</li>`);
    }

    render(){
        //reloading the list view
        let todoElements = [];
        this.todos.forEach((item, key) => {
            todoElements.push(this.template(item,key))
        });
        this.todoList.innerHTML = todoElements.join(" ")
    }
}

if(document.readyState === "complete" || document.addEventListener){
    const List = new TodoList(); 
}




