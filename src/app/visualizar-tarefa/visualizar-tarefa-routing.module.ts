import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarTarefaPage } from './visualizar-tarefa.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarTarefaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarTarefaPageRoutingModule {}
