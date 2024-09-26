// Seleccionamos los elementos del DOM
const taskInput = document.getElementById("new-task");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

// Función para añadir una tarea
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Por favor, ingresa una tarea");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Eliminar";
  deleteBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = ""; // Limpiamos el campo de entrada
}

// Evento al hacer clic en el botón "Añadir Tarea"
addTaskBtn.addEventListener("click", addTask);

// Evento para añadir la tarea al presionar la tecla "Enter"
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
