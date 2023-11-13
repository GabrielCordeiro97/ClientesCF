import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent, IonItem, IonIcon, IonLabel, IonNote, IonButton, IonInput, IonText, IonToggle, IonTextarea } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { personCircle } from 'ionicons/icons';
import { DataService, Cliente } from '../services/data.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-view-cliente',
  templateUrl: './view-cliente.page.html',
  styleUrls: ['./view-cliente.page.scss'],
  standalone: true,
  imports: [CommonModule,
            RouterLink,
            IonHeader, 
            IonToolbar, 
            IonButtons, 
            IonBackButton, 
            IonContent, 
            IonItem, 
            IonIcon, 
            IonLabel, 
            IonNote, 
            IonButton, 
            IonInput, 
            IonText,
            IonToggle,
            IonTextarea
          ],
})
export class ViewClientePage implements OnInit {
  public cliente!: Cliente;
  private data = inject(DataService);
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);

  constructor() {
    addIcons({ personCircle });
  }
  @Output() atualizarListaFiltrada: EventEmitter<any> = new EventEmitter()

  ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id') as string;
    this.cliente = this.data.getClientesById(id);
  }
  salvarCliente() {
    console.log(this.cliente)
  }
  deletarCliente(cliente: Cliente) {
    const id = cliente.id
    this.data.removendoCliente(id);
    this.atualizarListaFiltrada.emit()
  }

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }
}
