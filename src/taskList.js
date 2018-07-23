class TaskList {

  constructor() {
    this.tasks = []
  }

  createTask(taskDescription, taskPriority) {
    let task = new Task(taskDescription, taskPriority);
    this.tasks.push(task);
    return task;
  }

  handleSubmit(e) {
    e.preventDefault();
    let eTarget = e.target.querySelector('#new-task-description').value
    let priority = e.target.querySelector('#priority').value
    const newTask = this.createTask(eTarget, priority)
    const color = this.priorityColor(priority)
    this.renderTask(newTask, color);
  }

  renderTask(task,color) {
    let tasks = document.querySelector('#tasks');
    let taskTemplate = `<li data-id=${task.id} style='color: ${color};'>${task.name}<button class='delete' > X </button></li>`;
    tasks.innerHTML += taskTemplate;

  }

  priorityColor(p){
    switch (p) {
      case '1':
        return 'red'
        break;
      case '2':
        return '#d8bf0b';
        break;
      case '3':
        return 'green';
        break;
    }
  }
  handleDelete(e) {
    if (e.target.className === 'delete') {
      const parentEl = e.target.parentElement;
      const id = parentEl.dataset.id;
      parentEl.remove();
      this.deleteTask(id);
    }
  }

  deleteTask(id) {
    const foundId = this.tasks.find(el => el.id === id)
    const indexId = this.tasks.indexOf(foundId)
    this.tasks.splice(indexId, 1)
  }

}
