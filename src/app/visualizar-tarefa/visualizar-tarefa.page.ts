import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Tarefa } from '../api/models/Tarefa';

@Component({
  selector: 'app-visualizar-tarefa',
  templateUrl: './visualizar-tarefa.page.html',
  styleUrls: ['./visualizar-tarefa.page.scss'],
})
export class VisualizarTarefaPage implements OnInit {
  tarefa: Tarefa;

  constructor(
    public actvdRoute: ActivatedRoute
  ) { 
    this.actvdRoute.queryParams.subscribe(res => {
      this.tarefa = JSON.parse(res.value);
    })
  }

  ngOnInit() {

  }

}
