import { NgModule } from "@angular/core";

import { ATUALIZAR_USUARIO_CONTROLLER,  } from "../../../../../domain/interfaces/controllers/usuario/atualizar-usuario-controller.interface";
import { AtualizarUsuarioControllerService } from "../../../../controllers/usuario/atualizar-usuario-controller.service";
import { ATUALIZAR_USUARIO_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/atualizar-usuario.use-case.interface";
import { AtualizarUsuarioUseCase } from "../../../../../application/use-cases/usuario/atualizar-usuario.use-case";
import { USUARIO_REPOSITORY } from "../../../../../domain/interfaces/repositories/usuario/usuario-repository.interface";
import { CrudUsuarioMockRepository } from "../../../../../data/repositories/usuario/crud-usuario-mock.repository";

@NgModule({
  providers: [
    { provide: ATUALIZAR_USUARIO_CONTROLLER, useClass: AtualizarUsuarioControllerService },
    { provide: ATUALIZAR_USUARIO_USE_CASE, useClass: AtualizarUsuarioUseCase },
    { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
  ],
})
export class AtualizarUsuarioProvidersModule {}