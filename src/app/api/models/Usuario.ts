export class Usuario {
    id: string
    taskName: string;
    created: Date;
    description: string;
    completed: boolean = false;
    taskStatus: string = 'todo';

    constructor(task) {
        this.id = task.id
        this.taskName = task.taskName;
        this.created = task.created;
        this.description = task.description;
        this.completed = task.completed;
        this.taskStatus = task.taskStatus;
    }
}