import { NgModule } from "@angular/core";

import { ListarUsuariosControllerService } from "../../../../controllers/usuario/listar-usuarios-controller.service";

import { LISTAR_USUARIOS_CONTROLLER } from "../../../../../domain/interfaces/controllers/usuario/listar-usuario-controller.interface";
import { LISTAR_USUARIOS_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/listar-usuarios.use-case.interface";
import { ListarUsuariosUseCase } from "../../../../../application/use-cases/usuario/listar-usuarios.use-case";
import { USUARIO_REPOSITORY } from "../../../../../domain/interfaces/repositories/usuario/usuario-repository.interface";
import { CrudUsuarioApiRestRepository } from "../../../../../data/repositories/usuario/crud-usuario-api-rest.repository";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
      CommonModule,
      HttpClientModule,
    ],
    providers: [
      { provide: LISTAR_USUARIOS_CONTROLLER, useClass: ListarUsuariosControllerService },
      { provide: LISTAR_USUARIOS_USE_CASE, useClass: ListarUsuariosUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioApiRestRepository },
    ],
  })
  export class ListarUsuariosProvidersModule {}
