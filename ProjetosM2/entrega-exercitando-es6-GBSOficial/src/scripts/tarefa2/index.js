import { tasks } from "./database.js";

 const getTasksDescriptions = (tasksList) => {
    return tasksList.map(task => task.description);
  };
  
  console.log(getTasksDescriptions(tasks));

 const filterTasksByPriority = (tasksList, priority) => {
    return tasksList.filter(task => task.priority === priority);
  };
  
  
  const highPriorityTasks = filterTasksByPriority(tasks, 'alta');
  console.log(highPriorityTasks);

 const findTaskById = (tasksList, id) => {
    return tasksList.find(task => task.id === id);
  };

  const task = findTaskById(tasks, 1);
  console.log(task);
  

  const removeTask = (tasksList, id) => {
    const indexToRemove = tasksList.findIndex(task => task.id === id);
  
    if (indexToRemove !== -1) {
      const removedTask = tasksList.splice(indexToRemove, 1);
      return removedTask;
    } else {
      return "Tarefa não encontrada.";
    }
  };

  const removedTask = removeTask(tasks, 1);
  console.log(removedTask);
  
  console.log(tasks);