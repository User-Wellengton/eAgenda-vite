import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Tarefa } from "./models/tarefa.model";
import { TarefaRepositoryLocalStorage } from "./repositories/tarefa.repository.local-Storage";


class TarefaPaginaListagem implements IPaginaHTML, IPaginaListagem {
  tabela: HTMLTableElement;

  constructor(private repositiorioTarefas: IRepositorio<Tarefa>) {
    this.configurarElementos();
    this.atualizarTabela();
  }

  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }

  atualizarTabela(): void {
    const tarefas = this.repositiorioTarefas.selecionarTodos();

    let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    tarefas.forEach(tarefa => {
      const novaLinha = corpoTabela.insertRow();

      Object.values(tarefa).forEach((valor: any) => {
        const novaCelula = novaLinha.insertCell();

        novaCelula.innerText = valor;
      });

      // inserindo botao de Editar
      const btnEditar = novaLinha.insertCell();
      const botaoEditar = document.createElement("a");
      botaoEditar.className = "btn btn-info";
      botaoEditar.innerText = "Editar";
      botaoEditar.addEventListener("click", () => {
        const idSelecionado = novaLinha.cells[0].innerText;

        // "?" parametro de query
        window.location.href = `tarefa.create.html?id=${idSelecionado}`;

      });


      // Inserindo botao de excluir      
      const btnEcluir = novaLinha.insertCell();
      const botaoExcluir = document.createElement("a");
      botaoExcluir.className = "btn btn-danger";
      botaoExcluir.innerText = "Excluir";

      botaoExcluir.addEventListener("click", () => {
        const idSelecionado = tarefa.id;

        this.repositiorioTarefas.excluir(idSelecionado);

        window.location.reload();
      });
      btnEditar.appendChild(botaoEditar);
      btnEcluir.appendChild(botaoExcluir);

    });

  }
}

new TarefaPaginaListagem(new TarefaRepositoryLocalStorage());