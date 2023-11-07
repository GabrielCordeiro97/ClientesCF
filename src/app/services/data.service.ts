import { Injectable } from '@angular/core';

export interface Cliente {
  id: string;
  nomeComp: string;
  nomeResumido: string;
  cpf: string;
  telefone: string;
  celular: string;
  email: string;
  situacao: boolean;
  nascimento: string;
  endereco: string;
  selecionado:boolean
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public clientes: Cliente[] = [
    {
      id: '1',
      nomeComp: 'Gabriel Cordeiro Faria',
      nomeResumido: 'Gabriel',
      cpf: '15028577817',
      telefone: '21965012222',
      celular: '41654321222',
      email: 'gabriel.faria97@hotmail.com',
      situacao: true,
      nascimento: '15/06/1997',
      endereco: 'Rua Doutor Jose Palu',
      selecionado:false
    },
    {
      id: '2',
      nomeComp: 'Daniel Cordeiro Faria',
      nomeResumido: 'Daniel',
      cpf: '16029577817',
      telefone: '21955518257',
      celular: '21955518257',
      email: 'daniel.faria97@gmail.com',
      situacao: true,
      nascimento: '06/08/1989',
      endereco: 'Rua General Potiguar',
      selecionado:false
    },
    {
      id: '3',
      nomeComp: 'Gabriel Cordeiro Faria',
      nomeResumido: 'Gabriel',
      cpf: '15028577817',
      telefone: '41123451222',
      celular: '41123451222',
      email: 'cordeiro.faria97@gmail.com',
      situacao: true,
      nascimento: '15/06/1997',
      endereco: 'Rua Doutor Jose Palu',
      selecionado:false
    },
    {
      id: '5',
      nomeComp: 'Bruno Petito',
      nomeResumido: 'Bruno',
      cpf: '96582344659',
      telefone: '21965821234',
      celular: '21965821234',
      email: 'bruno.petito@gmail.com',
      situacao: true,
      nascimento: '21/07/1997',
      endereco: 'Rua Teste Teste',
      selecionado:false
    },
  ];

  constructor() { }

  public getClientes(): Cliente[] {
    return this.clientes;
  }

  public getClientesById(id: string): any {
    return this.clientes.find((cliente: Cliente) => cliente.id === id);
  }
}
