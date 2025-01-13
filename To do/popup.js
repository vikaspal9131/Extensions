  const addBtn = document.querySelector(".add-btn");
 

  addBtn.addEventListener("click" , ()=>{

    const newTask = document.createElement('h1');

    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "Enter a task";

    // Create a button to add the task
    const submitBtn = document.createElement("button");
    submitBtn.textContent = "Add Task";

    // Append input field and button to the new element
    newTask.appendChild(inputField);
    newTask.appendChild(submitBtn);
    submitBtn.addEventListener("click", () => {
      const taskText = inputField.value.trim(); // Get the value from the input field
      if (taskText) {
        // Display the task in the new element and remove the input field and button
        newElement.textContent = taskText;
      } else {
        alert("Please enter a task!"); // Alert if input is empty
      }
    });
    
   

    const preEle = document.querySelector(".tasks h1");
    preEle.insertAdjacentElement("afterend", newTask);
  })