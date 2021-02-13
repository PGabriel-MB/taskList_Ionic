import { Component, OnInit } from '@angular/core';

import { RequestApiService } from '../api/reques-api/request-api.service';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.page.html',
  styleUrls: ['./completed-tasks.page.scss'],
})
export class CompletedTasksPage implements OnInit {

  t
  constructor(public request: RequestApiService) { }

  ngOnInit() {
    
  }

  getTasks() {
    this.taskList = [];
    this.request.getRequest('api/tasks/').then(async r => {
      let tasks = await r;

      tasks.map(task => {
        if (!task.completed) {
          this.taskList.push({
            id: task.id,
            taskName: task.task_name,
            created: task.created,
            description: task.description,
            completed: task.completed,
            taskStatus: task.task_status
          });
        }
      });
    });
  }
}
