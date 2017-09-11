function onReady() {
  const addToDForm  = document.getElementById('addToDForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList    = document.getElementById('toDoList');

  addToDForm.addEventListener('submit', (event) => {
    event.preventDefault();

    //get the text
    let title = newToDoText.value;

    //create a new li
    let newLi = document.createElement('li');

    //create a new input for the checkbox
    let checkbox = document.createElement('input');

    //set the input's type to checkbox
    checkbox.type = "checkbox";

    //set the title
    newLi.textContent = title;

    //attach it to the ul
    toDoList.appendChild(newLi);

    //attach the checkbox to the li
    newLi.appendChild(checkbox);

    //empty the input
    newToDoText.value = '';

    //create a delete button
    let deleteButton = document.createElement('button');

    //set delete button type
    deleteButton.type = "reset";

    //set delete button input
    deleteButton.textContent = "Delete";

    //deletes todos no longer needed
    deleteButton.removeChild(newLi);

    }

  });
}

window.onload = function() {
  alert("The window has loaded!");
  onReady();
};
