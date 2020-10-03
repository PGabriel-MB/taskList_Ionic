export class Tarefa {
    nomeTarefa: string;
    dataHoraEntrega: Date;
    detalhes: string;
    concluida: boolean = false;

    constructor(tarefa) {
        this.nomeTarefa = tarefa.nomeTarefa;
        this.dataHoraEntrega = tarefa.dataHoraEntrega;
        this.detalhes = tarefa.detalhes;
    }
}