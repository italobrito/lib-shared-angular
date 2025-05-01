import { Validators } from "@angular/forms";

import { validaCpf } from "./validators/ValidaCpf";
import { dataPadraoBrasileiro } from "./validators/ValidaDataNascimento";
import { validaEmail } from "./validators/ValidaEmail";
import { validaTelefone } from "./validators/ValidaTelefone";

export class InformacoesPessoaisFormBuilderValidators {
    static getModel() {
      return {
        nomeCompleto: ['', [Validators.required, Validators.minLength(3)]],
        genero: ['', [Validators.required]],
        email: ['', [Validators.required, validaEmail()]],
        telefone: ['', [Validators.required, validaTelefone()]],
        dataNascimento: ['', [Validators.required, dataPadraoBrasileiro()]],
        cpf: ['', [Validators.required, validaCpf()]],
        rg: ['', [Validators.required]],
      };
    }
  }