import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, 
         IonHeader, 
         IonToolbar, 
         IonTitle, 
         IonContent, 
         IonRefresher, 
         IonRefresherContent, 
         IonList, 
         IonListHeader, 
         IonLabel,
         IonButton,
         IonIcon,
         IonInput,
         IonCheckbox } from '@ionic/angular/standalone';
import { ClienteComponent } from '../Cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { CheckboxService } from '../Cliente/checkbox.service';
import { DataService, Cliente } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule,
            IonHeader, 
            IonToolbar, 
            IonTitle, 
            IonContent, 
            IonRefresher, 
            IonRefresherContent, 
            IonList, 
            IonListHeader,
            IonLabel,
            IonButton, 
            IonIcon,
            IonInput,
            IonCheckbox,
            FormsModule,
            ClienteComponent],
})
export class HomePage {
  private data = inject(DataService);
  constructor(private checkboxService: CheckboxService) {
  }

  filterValues: any = {};
  temFiltro: boolean = true
  estadoCheckbox: boolean = false;
  listaFiltrada:any = this.getClientes();
  checkboxMaster = false;

  checkFilter(coluna: string){
    const pesquisa = this.filterValues[coluna].toLowerCase();
    if (!pesquisa) {
      this.listaFiltrada = this.getClientes()
    } else {
      this.listaFiltrada = this.listaFiltrada.filter((cliente: any) => {
        return cliente[coluna].toLowerCase().includes(pesquisa)
      })
    }
  }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  getClientes(): Cliente[] {
    return this.data.getClientes();
  }
  
  checkboxChanged() {
    this.estadoCheckbox = this.checkboxService.getCheckboxValue();
  }

  onCheckboxMaster() {
    this.checkboxMaster = !this.checkboxMaster
    if (this.checkboxMaster === true) {
      this.checkboxService.selecionaTodosClientes();
      console.log(this.checkboxService.clientesSelecionados)
    }else{
      this.checkboxService.removeTodosClientes();
    }
    this.checkboxChanged();
  }

}