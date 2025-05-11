import { Inject, Injectable } from '@angular/core';

import { ListarUsuariosUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/listar-usuarios.use-case.interface';
import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '../../../domain/interfaces/repositories/usuario/usuario-repository.interface';
import { Usuario } from '../../../domain/entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class ListarUsuariosUseCase implements ListarUsuariosUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    listar(): Promise<Usuario[]> {
        return this.usuarioRepository.listar();
    }
}
