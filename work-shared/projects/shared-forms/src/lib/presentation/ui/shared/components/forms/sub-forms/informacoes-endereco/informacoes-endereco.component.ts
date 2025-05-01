import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormsAbstractComponent } from '../sub-forms-abstract-component';

import { ESTADOS_BRASILEIROS } from '../../../../constants/estados-brasileiros';

import { BtpDropdownComponent } from '../../../inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '../../../inputs/btn-input/btn-input.component';
import { DropdownType } from '../../../../../../../domain/entities/dropdown-type';

@Component({
  selector: 'app-informacoes-endereco',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-endereco.component.html',
})
export class InformacoesEnderecoComponent extends SubFormsAbstractComponent {
  _listaEstados: Array<DropdownType> = ESTADOS_BRASILEIROS;
}
