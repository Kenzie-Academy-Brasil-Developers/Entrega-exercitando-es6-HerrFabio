const tasks = require('./database'); 

// Função retorna um novo array com apenas as descrições das tarefas
const getTasksDescriptions = tasks  => {
    const tasksDescriptions = tasks.map(task => task.description);
    return tasksDescriptions;
    
  }
    // console.log(getTasksDescriptions(tasks));

  // Função para filtrar tarefas por prioridade
  const filterTasksByPriority = (tasks, priority) => {
    const highPriorityTasks = tasks.filter( task => task.priority === priority);
    return highPriorityTasks;
  }

  // console.log(filterTasksByPriority(tasks, 'alta'));
  
  // Função para obter uma task pelo seu id 
  const findTaskById = (tasks, id) => {
    const getTasksId = tasks.filter(task => task.id === id);
    return getTasksId;
  }

  // console.log(findTaskById (tasks, 1));

  
  // Função para remover task
  const removeTask = (taskList, id) => {
    const changeTasks = tasks.findIndex(task => task.id === id);
      
      if(changeTasks === -1){
        // console.log('Tarefa não encontrada.');

        return 'Tarefa não encontrada.';
      }
    
      const removedTask = tasks.splice(changeTasks, 1);
      return tasks;

  }

  console.log(removeTask(1, 111));