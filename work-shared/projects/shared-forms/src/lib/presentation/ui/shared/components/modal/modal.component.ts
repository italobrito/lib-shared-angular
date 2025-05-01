import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BtnAtualizarDirective } from '../../directives/btns/btn-atualizar.directive';
import { BtnDeletarDirective } from '../../directives/btns/btn-deletar.directive';
import { BtnCadastrarDirective } from '../../directives/btns/btn-cadastrar.directive';

@Component({
    selector: 'app-modal',
    standalone: true,
    imports: [
        CommonModule,
        BtnAtualizarDirective,
        BtnDeletarDirective,
        BtnCadastrarDirective
    ],
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
    @Input() isVisible: boolean = false;
    @Input() title: string = 'Confirmação';
    @Input() message: string = 'Tem certeza que deseja realizar esta ação?';
    @Input() origem: 'cadastrar' | 'atualizar' | 'deletar' | 'visualizar' = 'cadastrar';
    @Output() onConfirmar = new EventEmitter<void>();
    @Output() onFechar = new EventEmitter<void>();

    confirm(): void {
        this.onConfirmar.emit();
        this.isVisible = false;
    }

    close(): void {
        this.onFechar.emit();
        this.isVisible = false;
    }
}