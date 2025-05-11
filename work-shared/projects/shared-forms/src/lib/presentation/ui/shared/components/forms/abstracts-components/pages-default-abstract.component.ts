import { Component, inject, ViewChild } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { NotificadorMensagensComponent } from '../../notificador-mensagens/notificador-mensagens.component';

@Component({
  selector: 'pages-default-abstract-component',
  template: '',
  standalone: true,
  imports: [CommonModule],
})
export abstract class PagesDefaultAbstractComponent<T> {
  @ViewChild('componente') componente!: T;
  @ViewChild(NotificadorMensagensComponent) notificador!: NotificadorMensagensComponent;
  
  private location: Location = inject(Location);
  
  protected _isModalAberta: boolean = false;
  _habilitarBotaoPersistir: boolean = true;

  voltar(): void {
    this.location.back();
  }

  abrirFecharModal() {
    this._isModalAberta = !this._isModalAberta;
  }

  confirmouAcaoModal() {
    this.abrirFecharModal();
  }

  fecharModal() {
    this.abrirFecharModal();
  }
}
