export class Tarefa {
    id: string
    taskName: string;
    created: Date;
    description: string;
    completed: boolean = false;
    taskStatus: string = 'todo'

    constructor(task) {
        this.id = task.id
        this.taskName = task.t;
        this.created = task.created;
        this.description = task.description;
        this.completed = task.completed;
        this.taskStatus = task.taskStatus;
    }
}