function onReady() {
  var toDos = [];
  var addTodoForm = document.getElementById('addTodoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');
    toDos.push({
      //property: value
      title: newToDoText.value,
      complete: false;
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var toDoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach(function(toDo){
      var newLi     = document.createElement('li');
      var checkbox  = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.innerHTML = toDo.title;

      //why the change in case?  this isn't present anywhere else
      //case was changed in next step, must be mistake @bloc
      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addTodoForm.addEventListener('submit', function (event) {
    event.preventDefault();
    createNewToDo();
  });

  /*why is renderTheUI recognized as a function? it has not yet been
  declared anywhere
  Also todos is different case that toDos.  Intentional? Affect functionality?
  */
  renderTheUI(todos);
}



window.onload = function() {
  onReady();
};
