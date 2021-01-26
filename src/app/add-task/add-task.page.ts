import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RequestApiService } from '../api/reques-api/request-api.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  taskName: string = '';
  description: string = '';

  constructor(public request: RequestApiService, public mdlCtrlr: ModalController) { }

  ngOnInit() {
  }

  dismiss() {
    this.mdlCtrlr.dismiss({ 'dismissed': true });
  }
  
  saveTask(){
    let newTask = {
      task_name: this.taskName,
      description: this.description
    }

    this.request.postRequest('api/tasks/', newTask).then(async r => {
      this.mdlCtrlr.dismiss({ 'reload': true });
    });
  }
}
