import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SubFormsAbstractComponent } from '../sub-forms-abstract-component';

import { TEMA_SISTEMA } from '../../../../constants/tema-sistema';
import { TIPOS_USUARIOS } from '../../../../constants/tipos-usuarios';
import { DropdownType } from '../../../../../../../domain/entities/dropdown-type';
import { TIPOS_STATUS_USUARIO } from '../../../../constants/tipos-status-usuario';
import { BtpDropdownComponent } from '../../../inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '../../../inputs/btn-input/btn-input.component';

@Component({
  selector: 'app-informacoes-profissionais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-profissionais.component.html'
})
export class InformacoesProfissionaisComponent extends SubFormsAbstractComponent {
  _listaTemas: Array<DropdownType> = TEMA_SISTEMA;
  _listaTipoUsuario: Array<DropdownType> = TIPOS_USUARIOS;
  _listaStatus: Array<DropdownType> = TIPOS_STATUS_USUARIO;
}
