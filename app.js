function onReady() {
  var toDos = [];
  var addTodoForm = document.getElementById('addTodoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      //property: value
      title: newToDoText.value,
      complete: false,
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo){
      var newLi         = document.createElement('li');
      var checkbox      = document.createElement('input');
      var deleteButton  = document.createElement('button');
      checkbox.type     = "checkbox";
      deleteButton.type = "button";

      newLi.innerHTML         = toDo.title;
      deleteButton.innerHTML  = "Delete";

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteButton);

      deleteButton.addEventListener('click', function(event) {
        toDoList.removeChild(newLi);
      });
    });
  }

  addTodoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}



window.onload = function() {
  onReady();
};
