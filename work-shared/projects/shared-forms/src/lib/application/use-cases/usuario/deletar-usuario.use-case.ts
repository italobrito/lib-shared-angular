import { Inject, Injectable } from '@angular/core';
import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '../../../domain/interfaces/repositories/usuario/usuario-repository.interface';
import { DeletarUsuarioUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/deletar-usuario.use-case.interface';

// import { DeletarUsuarioUseCaseInterface } from '@domain/interfaces/use-cases/deletar-usuario.use-case.interface';
// import { USUARIO_REPOSITORY, UsuarioRepositoryInterface } from '@domain/interfaces/repositories/usuario-repository.interface';

@Injectable({
    providedIn: 'root',
})
export class DeletarUsuarioUseCase implements DeletarUsuarioUseCaseInterface {
    constructor(@Inject(USUARIO_REPOSITORY) private usuarioRepository: UsuarioRepositoryInterface) { }

    deletar(id: number): Promise<void> {
        return this.usuarioRepository.deletar(id);
    }
}
