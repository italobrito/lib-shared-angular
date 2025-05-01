import { NgModule } from "@angular/core";

import { DeletarUsuarioControllerService } from "../../../../controllers/usuario/deletar-usuario-controller.service";

import { DELETAR_USUARIO_CONTROLLER } from "../../../../../domain/interfaces/controllers/usuario/deletar-usuario-controller.interface";
import { DELETAR_USUARIO_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/deletar-usuario.use-case.interface";
import { DeletarUsuarioUseCase } from "../../../../../application/use-cases/usuario/deletar-usuario.use-case";
import { USUARIO_REPOSITORY } from "../.././../../../domain/interfaces/repositories/usuario/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "../../../../../data/repositories/usuario/crud-usuario-mock.repository";

@NgModule({
    providers: [
      { provide: DELETAR_USUARIO_CONTROLLER, useClass: DeletarUsuarioControllerService },
      { provide: DELETAR_USUARIO_USE_CASE, useClass: DeletarUsuarioUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
    ],
  })
  export class DeletarUsuarioProvidersModule {}
