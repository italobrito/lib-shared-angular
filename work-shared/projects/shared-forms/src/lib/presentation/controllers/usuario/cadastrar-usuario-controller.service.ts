import { Inject, Injectable } from '@angular/core';

import { CadastrarUsuarioControllerInterface } from '../../../domain/interfaces/controllers/usuario/cadastrar-usuario-controller.interface';
import { CADASTRAR_USUARIO_USE_CASE, CadastrarUsuarioUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/cadastrar-usuario.use-case.interface';
import { UsuarioFormulario } from '../../../domain/entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class CadastrarUsuarioControllerService implements CadastrarUsuarioControllerInterface {

    constructor(
        @Inject(CADASTRAR_USUARIO_USE_CASE) private cadastrarUseCase: CadastrarUsuarioUseCaseInterface
    ) { }

    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        return this.cadastrarUseCase.cadastrar(usuario);
    }
}
