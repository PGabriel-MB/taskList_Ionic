import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarTarefaPageRoutingModule } from './visualizar-tarefa-routing.module';

import { VisualizarTarefaPage } from './visualizar-tarefa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarTarefaPageRoutingModule
  ],
  declarations: [VisualizarTarefaPage]
})
export class VisualizarTarefaPageModule {}
