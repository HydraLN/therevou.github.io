const form = document.getElementById("form");
const textInput = document.getElementById("text");
const dateInput = document.getElementById("date");
const taskList = document.getElementById("thelist");
const filterInput = document.getElementById("filter");
const deleteAllBtn = document.getElementById("deleteAll");

form.onsubmit = e => {
  e.preventDefault();

  const taskText = textInput.value.trim();
  const taskDate = dateInput.value;

  if (!taskText || !taskDate) {
    alert("Set the task and date!");
    return;
  }

  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taskDiv.innerText = `${taskText} — ${taskDate}`;

  taskList.appendChild(taskDiv);
  form.reset();
};

filterInput.oninput = () => {
  const term = filterInput.value.toLowerCase();
  Array.from(taskList.children).forEach(task => {
    task.style.display = task.innerText.toLowerCase().includes(term) ? "" : "none";
  });
};

deleteAllBtn.onclick = () => {
  taskList.innerHTML = "";
};