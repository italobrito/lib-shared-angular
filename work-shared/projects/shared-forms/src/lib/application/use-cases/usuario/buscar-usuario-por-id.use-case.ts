import { Inject, Injectable } from '@angular/core';

import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '../../../domain/interfaces/repositories/usuario/usuario-repository.interface';
import { BuscarUsuarioPorIdUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/buscar-usuario-por-id.use-case.interface';
import { UsuarioFormulario } from '../../../domain/entities/usuario';

@Injectable({
    providedIn: 'root'
})
export class BuscarUsuarioPorIdUseCase implements BuscarUsuarioPorIdUseCaseInterface {

    constructor(
        @Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface
    ) { }

    buscarPorId(id: number): Promise<UsuarioFormulario> {
        return this.usuarioRepository.buscarPorId(id);
    }
}
