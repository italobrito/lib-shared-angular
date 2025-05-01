import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SubFormsAbstractComponent } from '../sub-forms-abstract-component';

import { GENEROS } from '../../../../constants/generos';
import { DropdownType } from '../../../../../../../domain/entities/dropdown-type';
import { BtpDropdownComponent } from '../../../inputs/btn-dropdown/btp-dropdown.component';
import { BtnInputComponent } from '../../../inputs/btn-input/btn-input.component';

@Component({
  selector: 'app-informacoes-pessoais',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BtnInputComponent,
    BtpDropdownComponent
  ],
  templateUrl: './informacoes-pessoais.component.html',
})
export class InformacoesPessoaisComponent extends SubFormsAbstractComponent {
  _listaGeneros: Array<DropdownType> = GENEROS;
}
