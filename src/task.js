let taskId = 0;

class Task {
  constructor(name, priority) {
    this.id = ++taskId;
    this.name = name;
    this.priority = priority;

  }

}
