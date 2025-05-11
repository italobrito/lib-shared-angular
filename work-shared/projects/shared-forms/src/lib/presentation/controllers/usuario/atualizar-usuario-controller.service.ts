import { Injectable, Inject } from '@angular/core';

import { AtualizarUsuarioControllerInterface } from '../../../domain/interfaces/controllers/usuario/atualizar-usuario-controller.interface';
import { ATUALIZAR_USUARIO_USE_CASE, AtualizarUsuarioUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/atualizar-usuario.use-case.interface';
import { UsuarioFormulario } from '../../../domain/entities/usuario';

@Injectable({
  providedIn: 'root',
})
export class AtualizarUsuarioControllerService implements AtualizarUsuarioControllerInterface {
  constructor(
    @Inject(ATUALIZAR_USUARIO_USE_CASE) private atualizarUsuarioUseCase: AtualizarUsuarioUseCaseInterface
  ) {}

  atualizar(id: number, usuario: UsuarioFormulario): Promise<UsuarioFormulario> {
    return this.atualizarUsuarioUseCase.atualizar(id, usuario);
  }
}