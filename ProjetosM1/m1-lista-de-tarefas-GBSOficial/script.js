const tasks = [
    {
      title: "Comprar comida para o gato",
      type: "Urgente",
    },
    {
      title: "Consertar Computador",
      type: "Prioritário",
    },
    {
      title: "Beber água",
      type: "Normal",
    },
  ];
  
  function createCard(taskInfo) {
    const taskCardItem = document.createElement("li");
    const taskCardContent = document.createElement("div");
    const taskType = document.createElement("span");
    const taskDescription = document.createElement("p");
  
  
    taskDescription.innerText = taskInfo.title;
  
  
    taskCardContent.appendChild(taskType);
    taskCardContent.appendChild(taskDescription);
  
  
    const buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  
  
    buttonDelete.addEventListener('click', function() {
      deleteTask(taskInfo);
    });
  
    taskCardItem.appendChild(taskCardContent);
    taskCardItem.appendChild(buttonDelete);
  
    if (taskInfo.type === "Urgente") {
      taskType.className = "span-urgent";
    } else if (taskInfo.type === "Prioritário") {
      taskType.className = "span-priority";
    } else {
      taskType.className = "span-normal";
    }
  
    return taskCardItem;
  }
  
  function renderElements(taskList) {
    const htmlList = document.querySelector(".tasks");
    htmlList.innerHTML = "";
  
    for (let i = 0; i < taskList.length; i++) {
      const card = createCard(taskList[i]);
      htmlList.appendChild(card);
    }
  }
  
  function addTaskToList() {
    const title = document.getElementById('input_title').value;
    const priority = document.getElementById('input_priority').value;
  
  
    if (title.trim() !== '' && priority.trim() !== '') {
      const newTask = {
        title: title,
        type: priority,
      };
      tasks.push(newTask);
      renderElements(tasks);
      document.getElementById('input_title').value = '';
    }
  }
  
  function deleteTask(taskInfo) {
    const index = tasks.indexOf(taskInfo);
    tasks.splice(index, 1);
    renderElements(tasks);
  }
  
  document.getElementById('btnSubmit').addEventListener('click', function (event) {
    event.preventDefault();
    addTaskToList();
  });
  
  renderElements(tasks);