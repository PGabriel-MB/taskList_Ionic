import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Tarefa } from "../api/models/Tarefa";
import { RequestApiService } from '../api/reques-api/request-api.service';
import { StorageService } from "../api/storage/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaTarefas: Tarefa[] = [];

  username: string = '';

  constructor(
    public router: Router,
    public actvdRoute: ActivatedRoute,
    public strgSvc: StorageService,
    public request: RequestApiService
  ) {
  }

  ionViewWillEnter() {
    this.strgSvc.getUser().then(r => {
      this.username = r.username
    })

    this.listaTarefas = []
    this.getTarefas();

    this.actvdRoute.queryParams.subscribe(res => {
      let tarefa = res.concluida ? JSON.parse(res.concluida) : false;

      if (tarefa) {
        this.listaTarefas.map((item, index) => {
          console.log('ITEM', item, tarefa)
          if (item.id === tarefa) {
            this.listaTarefas.splice(index, 1);
          }
        });
      }
    });
  }

  visualizarTarefa(tarefa: Tarefa) {
    this.router.navigate(['/visualizar-tarefa'], { queryParams: { value: JSON.stringify(tarefa) } })
  }

  getTarefas() {
   this.request.getRequest('api/tasks/').then(async r => {
     
   });

    console.log('Pegando tarefas...')
  }
}
