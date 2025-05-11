import { NgModule } from "@angular/core";

import { ATUALIZAR_USUARIO_CONTROLLER,  } from "../../../../../domain/interfaces/controllers/usuario/atualizar-usuario-controller.interface";
import { AtualizarUsuarioControllerService } from "../../../../controllers/usuario/atualizar-usuario-controller.service";
import { ATUALIZAR_USUARIO_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/atualizar-usuario.use-case.interface";
import { AtualizarUsuarioUseCase } from "../../../../../application/use-cases/usuario/atualizar-usuario.use-case";
import { USUARIO_REPOSITORY } from "../../../../../domain/interfaces/repositories/usuario/usuario-repository.interface";
import { CrudUsuarioApiRestRepository } from "../../../../../data/repositories/usuario/crud-usuario-api-rest.repository";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    { provide: ATUALIZAR_USUARIO_CONTROLLER, useClass: AtualizarUsuarioControllerService },
    { provide: ATUALIZAR_USUARIO_USE_CASE, useClass: AtualizarUsuarioUseCase },
    { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioApiRestRepository },
  ],
})
export class AtualizarUsuarioProvidersModule {}