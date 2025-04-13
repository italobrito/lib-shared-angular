import { Validators } from '@angular/forms';

export class UserDefaultFormBuilderValidators {
  static getModel() {
    return {
      nomeCompleto: ['', Validators.required],
      dataNascimento: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(/([0-2][0-9]|3[0-1])\/(0[0-9]|1[0-2])\/[0-9]{4}/),
        ]),
      ],
      cpfCnpj: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(3)]],
      confirmPassword: ['', Validators.required],
    };
  }
}
