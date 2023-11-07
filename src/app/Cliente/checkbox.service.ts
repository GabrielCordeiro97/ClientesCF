import { Injectable } from '@angular/core';
import { DataService, Cliente } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class CheckboxService {
  constructor(private dataService: DataService) {
  }
  clientesSelecionados: Array<[]> = [];

  adicionarClienteSelecionado(id: any) {
    this.clientesSelecionados.push(id);
  }

  removerClienteSelecionado(id: any) {
    const index = this.clientesSelecionados.indexOf(id);
    if (index !== -1) {
      this.clientesSelecionados.splice(index, 1);
    }
  }
  checkboxValue: boolean = false;
  getCheckboxValue() {
    if (this.clientesSelecionados.length > 0) {
      this.checkboxValue = true;
    } else{
      this.checkboxValue = false;
    }
    return this.checkboxValue;
  }

  clientes = this.dataService.getClientes();
  selecionaTodosClientes() {
    this.removeTodosClientes()
    for (const cliente of this.clientes) {
        this.adicionarClienteSelecionado(cliente.id);
    }
    
  }
  removeTodosClientes() {
    this.clientesSelecionados = []
  }
}

  