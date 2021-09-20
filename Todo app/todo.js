// this function gets the tastfrom input
function get_todos(){
    //This creates an array of tasks that are inputed
    var todos = new Array;
    //this pulls the task that was savedi n the web browser memory
    var todos_str = localStorage.getItem('todo');
    //if the input is not null then JSON.parse will
    //communicate with the web browser to make the task a JavaScript object
    if(todos_str !== null){
        todos = JSON.parse(todos_str);
    }
    return todos;
}
//This function adds the inputed task to the get_todos function array
function add(){
    //This takes the inputed task and creates a bariable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    //This adds a new task at the end of the array
    todos.push(task);
    //this converts the task input to a JSON string
    localStorage.setItem('todo',JSON.stringify(todos));
    document.getElementById("task").value= "";
    show();

    return false;
}

//This function keeps the tasks permently displayed on the screen
function show(){
    //this sets the task that was retrived as a variable
    var todos = get_todos();

    //this sets up each talk as an unordered list
    var html = '<ul>';
    //This displays a task to the list in the order that it was inputed
    for (var i = 0; i < todos.length; i++){
        //this also displays the task as a list and creates the button with the "x"
        html += '<li>' + todos[i]+ '<button class="remove" id"' + i +'">x</button><li>';
    };
    html += '</ul>';
    //This displays the task as a list
    document.getElementById('todos').innerHTML = html;
    //this tells the browser how to display the todo array after an item has been removed
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
        }
}
//This display the inputed task when the 'Add items' button is clicked
document.getElementById('add').addEventListener('click', add);
//this will keep the inputs displayed permanently on the screen
show();

//This creates the functionality of removing a todo item from the array
function remove(){
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todos',JSON.stringify(todos));
    //This looks in the show() howto dislay a removed item on the screen
    show();

    return false;
}
