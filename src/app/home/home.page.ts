import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tarefa } from "../api/models/Tarefa";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  listaTarefas: Tarefa[] = [];

  constructor(
    public router: Router
  ) {}

  ionViewWillEnter(){
    this.getTarefas();
  }

  visualizarTarefa(tarefa: Tarefa) {
    this.router.navigate(['/visualizar-tarefa'], { queryParams: { value: JSON.stringify(tarefa) } })
  }

  getTarefas() {
    this.listaTarefas.push(new Tarefa({
      nomeTarefa: 'Escovar o Dente',
      dataHoraEntrega: new Date(),
      detalhes: 'trenzinho, circulozinho, vassourinha'
    }));

    this.listaTarefas.push(new Tarefa({
      nomeTarefa: 'Escovar o Dente',
      dataHoraEntrega: new Date(),
      detalhes: 'trenzinho, circulozinho, vassourinha'
    }));

    this.listaTarefas.push(new Tarefa({
      nomeTarefa: 'Escovar o Dente',
      dataHoraEntrega: new Date(),
      detalhes: 'trenzinho, circulozinho, vassourinha'
    }));

    this.listaTarefas.push(new Tarefa({
      nomeTarefa: 'Escovar o Dente',
      dataHoraEntrega: new Date(),
      detalhes: 'trenzinho, circulozinho, vassourinha'
    }));

    this.listaTarefas.push(new Tarefa({
      nomeTarefa: 'Escovar o Dente',
      dataHoraEntrega: new Date(),
      detalhes: 'trenzinho, circulozinho, vassourinha'
    }));
    
  }
}
