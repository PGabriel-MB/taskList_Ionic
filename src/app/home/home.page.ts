import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarefa } from "../api/models/Tarefa";
import { StorageService } from "../api/storage/storage.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaTarefas: Tarefa[] = [];

  constructor(
    public router: Router,
    public actvdRoute: ActivatedRoute,
    public strgSvc: StorageService
  ) {
  }

  ionViewWillEnter() {
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
    this.listaTarefas = this.strgSvc.pegarTarefas();

    // this.listaTarefas.push(new Tarefa({
    //   id: 1,
    //   nomeTarefa: 'Escovar o Dente',
    //   dataHoraEntrega: new Date(),
    //   detalhes: 'trenzinho, circulozinho, vassourinha'
    // }));

    // this.listaTarefas.push(new Tarefa({
    //   id: 2,
    //   nomeTarefa: 'Escovar o Dente',
    //   dataHoraEntrega: new Date(),
    //   detalhes: 'trenzinho, circulozinho, vassourinha'
    // }));

    // this.listaTarefas.push(new Tarefa({
    //   id: 3,
    //   nomeTarefa: 'Escovar o Dente',
    //   dataHoraEntrega: new Date(),
    //   detalhes: 'trenzinho, circulozinho, vassourinha'
    // }));

    // this.listaTarefas.push(new Tarefa({
    //   id: 4,
    //   nomeTarefa: 'Escovar o Dente',
    //   dataHoraEntrega: new Date(),
    //   detalhes: 'trenzinho, circulozinho, vassourinha'
    // }));

    // this.listaTarefas.push(new Tarefa({
    //   id: 5,
    //   nomeTarefa: 'Escovar o Dente',
    //   dataHoraEntrega: new Date(),
    //   detalhes: 'trenzinho, circulozinho, vassourinha'
    // }));

  }
}
