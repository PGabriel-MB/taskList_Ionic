import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Tarefa } from "../models/Tarefa";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private strg: Storage) { }

  salvarTarefa(tarefa: any){
    //tarefa.id = tarefa.id ? tarefa.id : Math.floor(1000 * Math.random())
    this.strg.set(tarefa.id, tarefa);
  }
}
