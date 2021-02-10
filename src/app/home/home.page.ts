import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController, ToastController } from '@ionic/angular';

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
    public mdlCtrlr: ModalController,
    public toastCtrlr: ToastController
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

  async presentToast(message: string) {
    const toast = await this.toastCtrlr.create({
      message,
      duration: 5000
    });
    toast.present();
  }

  getTasks() {
    this.taskList = [];
    this.request.getRequest('api/tasks/').then(async r => {
      let tasks = await r;

      // You need to change de forEach para
      // map to iterate the tasks that is maked with
      // completed == false
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

  async addTask() {
    const modal = await this.mdlCtrlr.create({
      component: AddTaskPage
    });
    await modal.present();
    const { data } = await modal.onDidDismiss();

    if (data.hasOwnProperty('reload')) {
      this.getTasks();
    }
  }

  completeTask(task: any) {
    console.log(task)
    this.request.putRequest(
      'api/tasks/' + task.id + '/',
      { completed: true }
      ).then(async r => {
      await this.presentToast('Tarefa concluída com Sucesso! Lista Atualizada!');
      this.getTasks();
    });
  }
}
