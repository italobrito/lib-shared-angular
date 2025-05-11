import { Injectable, Inject } from '@angular/core';

import { LISTAR_USUARIOS_USE_CASE, ListarUsuariosUseCaseInterface } from '../../../domain/interfaces/usecases/usuario/listar-usuarios.use-case.interface';
import { Usuario } from '../../../domain/entities/usuario';
import { ListarUsuariosControllerInterface } from '../../../domain/interfaces/controllers/usuario/listar-usuario-controller.interface';

@Injectable({
  providedIn: 'root',
})
export class ListarUsuariosControllerService implements ListarUsuariosControllerInterface {
  constructor(
    @Inject(LISTAR_USUARIOS_USE_CASE) private listarUsuariosUseCase: ListarUsuariosUseCaseInterface
  ) { }

  listar(): Promise<Usuario[]> {
    return this.listarUsuariosUseCase.listar();
  }
}