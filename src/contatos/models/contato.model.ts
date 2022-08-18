import { EntidadeBase } from "../../shared/entidade.model.js";

export class Contato extends EntidadeBase {
  public nome: string;
  public email: string;
  public telefone: number;
  public empresa?: string;
  public cargo?: string;

  constructor(nome: string, email: string, telefone: number,
    empresa?: string, cargo?: string, id?: string) {

    super();

    if (id) {
      this.id = id;
    }

    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
    this.empresa = empresa;
    this.cargo = cargo;

  }
}