import { IPaginaHTML } from "../shared/pagina.interface";
import { IPaginaListagem } from "../shared/pagina.list.interface";
import { IRepositorio } from "../shared/repositorio.interface";
import { Contato } from "./models/contato.model";
import { ContatoRepositoryLocalStorage } from "./repositories/contato.repository.local-Storage";


class ContatoPaginaListagem implements IPaginaHTML, IPaginaListagem {
  tabela: HTMLTableElement;

  constructor(private repositiorioContatos: IRepositorio<Contato>) {
    this.configurarElementos();
    this.atualizarTabela();
  }

  configurarElementos(): void {
    this.tabela = document.getElementById("tabela") as HTMLTableElement;
  }


  atualizarTabela(): void {
    const contatos = this.repositiorioContatos.selecionarTodos();

    let corpoTabela = this.tabela.getElementsByTagName("tbody")[0];

    contatos.forEach(contato => {
      const novaLinha = corpoTabela.insertRow();

      Object.values(contato).forEach((valor: any) => {
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
        window.location.href = `contato.create.html?id=${idSelecionado}`;

      });


      // Inserindo botao de excluir      
      const btnEcluir = novaLinha.insertCell();
      const botaoExcluir = document.createElement("a");
      botaoExcluir.className = "btn btn-danger";
      botaoExcluir.innerText = "Excluir";

      botaoExcluir.addEventListener("click", () => {
        const idSelecionado = contato.id;

        this.repositiorioContatos.excluir(idSelecionado);

        window.location.reload();
      });
      btnEditar.appendChild(botaoEditar);
      btnEcluir.appendChild(botaoExcluir);

    });

  }
}

new ContatoPaginaListagem(new ContatoRepositoryLocalStorage());

