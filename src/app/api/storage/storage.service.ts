import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Tarefa } from "../models/Tarefa";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private strg: Storage) { }

  salvarTarefa(tarefa: any) {
    tarefa.id = tarefa.id ? tarefa.id : Math.floor(1000 * Math.random())
    this.strg.set(String(tarefa.id), tarefa);
  }

  excluirTarefa(idTarefa: string) {
    this.strg.remove(idTarefa);
  }

  pegarTarefas() {
    let tarefas: Tarefa[] = [];

    this.strg.forEach((value: Tarefa, key: string, iterationNumber: Number) => {
      tarefas.push(value)
    });

    return tarefas || [];
  }

}
