  const addBtn = document.querySelector(".add-btn");

  window.addEventListener("DOMContentLoaded", loadTasks);
  
  addBtn.addEventListener("click", () => {
    const newTask = document.createElement("div");
    newTask.classList.add("task");
  
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter a task";
  
  
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add Task";
  
    
    newTask.appendChild(inputField);
    newTask.appendChild(submitBtn);
  
    
    submitBtn.addEventListener("click", () => {
      const taskText = inputField.value.trim(); // Get the value from the input field
      if (taskText) {
           newTask.innerHTML = `${taskText} `;
  
    
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", () => {
    
          const confirmDelete = confirm(`Are you sure you want to delete the task: "${taskText}"?`);
          if (confirmDelete) {
            deleteTask(taskText, newTask);
          }
        });
  
        newTask.appendChild(deleteBtn);
  
        // Save the task to localStorage
        saveTask(taskText);
      } else {
        alert("Please enter a task!"); // Alert if input is empty
      }
    });
  
    // Insert the new task container after the reference element
    const preEle = document.querySelector(".tasks h1");
    preEle.insertAdjacentElement("afterend", newTask);
  });
  
  // Save a task to localStorage
  function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  
  // Load tasks from localStorage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const preEle = document.querySelector(".tasks h1");
  
    tasks.forEach(task => {
      const newTask = document.createElement("div");
      newTask.classList.add("task");
      newTask.textContent = task;
  
      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.addEventListener("click", () => {
        // Show confirmation popup before deleting
        const confirmDelete = confirm(`Are you sure you want to delete the task: "${task}"?`);
        if (confirmDelete) {
          deleteTask(task, newTask);
        }
      });
  
      newTask.appendChild(deleteBtn);
      preEle.insertAdjacentElement("afterend", newTask);
    });
  }
  
  // Delete a task from localStorage and the DOM
  function deleteTask(task, taskElement) {
    // Remove task from localStorage
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  
    // Remove task element from the DOM
    taskElement.remove();
  }
  