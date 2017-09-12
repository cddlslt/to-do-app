function onReady() {
  const addToDoForm   = document.getElementById('addToDoForm');
  const newToDoText   = document.getElementById('newToDoText');
  const toDoList      = document.getElementById('toDoList');
  const deleteButton  = document.getElementById('deleteButton');

  addTodoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement('input');

    //create a delete button
    let deleteButton = document.createElement('button');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set th deleteButton type to button
    deleteButton.type = "button";

    //set delete text to button
    deleteButton.textContent = "Delete!";

    //set the title
    newLi.textContent = title;

    //attach it to the ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //attach the deleteButton to the li
    newLi.appendChild(deleteButton);

    //have the delete button remove the li
    deleteButton.addEventListener('click', function (event) {
      toDoList.removeChild(newLi);
    });

    //empty the input
    newToDoText.value = '';

    deleteButton.onClick = function() {

    }

  });
}



window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
