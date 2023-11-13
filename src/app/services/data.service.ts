import { Injectable, Output, EventEmitter } from '@angular/core';

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
  cep: string;
  endereco: string;
  numero: string;
  complemento: string;
  cidade: string;
  bairro: string;
  estado: string;
  rg: string;
  observacoes: string;
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
      cep: '81020050',
      endereco: 'Rua Doutor Jose Palu',
      numero: '467',
      complemento: 'bloco 5A, Ap 22',
      cidade: 'Curitiba',
      bairro: 'Novo Mundo',
      estado: 'Paraná',
      rg: '276377025',
      observacoes:'Cliente vip gosta de receber os alimentos frescos',
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
      cep: '81020050',
      endereco: 'Rua Doutor Jose Palu',
      numero: '467',
      complemento: 'bloco 5A, Ap 22',
      cidade: 'Curitiba',
      bairro: 'Novo Mundo',
      estado: 'Paraná',
      rg: '456328971',
      observacoes:'',
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
      situacao: false,
      nascimento: '15/06/1997',
      cep: '81020050',
      endereco: 'Rua Doutor Jose Palu',
      numero: '467',
      complemento: 'bloco 5A, Ap 22',
      cidade: 'Curitiba',
      bairro: 'Novo Mundo',
      estado: 'Paraná',
      rg: '987123654',
      observacoes:'',
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
      cep: '81020050',
      endereco: 'Rua Teste Testado',
      numero: '472',
      complemento: '',
      cidade: 'Rio de Janeiro',
      bairro: 'Copacabana',
      estado: 'Rio de Janeiro',
      rg: '123456789',
      observacoes:'',
      selecionado:false
    },
  ];

  constructor() { 

  }
  public getClientes(): Cliente[] {
    return this.clientes;
  }

  public getClientesById(id: string): any {
    return this.clientes.find((cliente: Cliente) => cliente.id === id);
  }
  public removendoCliente(id: string): any{
    this.clientes = this.clientes.filter((cliente: Cliente) => cliente.id !== id)
    console.log(this.clientes)
  }
}
