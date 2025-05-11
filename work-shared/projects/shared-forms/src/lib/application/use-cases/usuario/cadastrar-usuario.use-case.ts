import { Inject, Injectable } from '@angular/core';

import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '../../../domain/interfaces/repositories/usuario/usuario-repository.interface';
import { CadastrarUsuarioUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/cadastrar-usuario.use-case.interface';
import { UsuarioFormulario } from '../../../domain/entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class CadastrarUsuarioUseCase implements CadastrarUsuarioUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    cadastrar(usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
        return this.usuarioRepository.cadastrar(usuario);
    }
}
