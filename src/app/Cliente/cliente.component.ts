import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, Input, Output, EventEmitter } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Platform, IonItem, IonLabel, IonNote, IonIcon, IonCheckbox, IonButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { DataService, Cliente } from '../services/data.service';
import { CheckboxService } from './checkbox.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, RouterLink, IonItem, IonLabel, IonNote, IonIcon, IonCheckbox, IonButton],
})

export class ClienteComponent {
  @Input() cliente?: Cliente;
  @Input() valorCheckboxMaster?: boolean;
  @Input() checkFilter?: string;
  constructor(private checkboxService: CheckboxService) {
    addIcons({ chevronForward });
  }

  // Funcionalidade evento checkbox
  @Output() estadoCheckbox: EventEmitter<any> = new EventEmitter()

  onCheckboxChange(cliente: any) {
    if (this.checkboxService.clientesSelecionados.includes(cliente.id)) {
      this.checkboxService.removerClienteSelecionado(cliente.id);
    } 
    else {
      this.checkboxService.adicionarClienteSelecionado(cliente.id);
    }
    console.log(this.checkboxService.clientesSelecionados)
    this.estadoCheckbox.emit()
  }

}