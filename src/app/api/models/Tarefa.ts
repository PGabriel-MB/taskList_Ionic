export class Tarefa {
    id: number
    nomeTarefa: string;
    dataHoraEntrega: Date;
    detalhes: string;
    concluida: boolean = false;

    constructor(tarefa) {
        this.id = tarefa.id
        this.nomeTarefa = tarefa.nomeTarefa;
        this.dataHoraEntrega = tarefa.dataHoraEntrega;
        this.detalhes = tarefa.detalhes;
    }
}