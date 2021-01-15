import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { Tarefa } from "../api/models/Tarefa";
import { RequestApiService } from '../api/reques-api/request-api.service';
import { StorageService } from "../api/storage/storage.service";
import { AddTaskPage } from "../add-task/add-task.page";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  taskList: Tarefa[] = [];

  username: string = '';

  constructor(
    public router: Router,
    public actvdRoute: ActivatedRoute,
    public strgSvc: StorageService,
    public request: RequestApiService,
    public mdlCtrlr: ModalController
  ) {
  }

  ionViewWillEnter() {
    this.strgSvc.getUser().then(r => {
      this.username = r.username
    })

    this.taskList = []
    this.getTasks();

    this.actvdRoute.queryParams.subscribe(res => {
      let tarefa = res.concluida ? JSON.parse(res.concluida) : false;

      if (tarefa) {
        this.taskList.map((item, index) => {
          if (item.id === tarefa) {
            this.taskList.splice(index, 1);
          }
        });
      }
    });
  }

  viewTask(task: Tarefa) {
    this.router.navigate(['/visualizar-tarefa'], { queryParams: { value: JSON.stringify(task) } })
  }

  getTasks() {
   this.request.getRequest('api/tasks/').then(async r => {
     let tasks = await r;
     tasks.forEach(task => {
       this.taskList.push({
         id: task.id,
         taskName: task.task_name,
         created: task.created,
         description: task.description,
         completed: task.completed,
         taskStatus: task.task_status
       })
     });
   });
  }

  async addTask() {
    const modal = await this.mdlCtrlr.create({
      component: AddTaskPage
    });
    return await modal.present();
  }
}
