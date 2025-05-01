import { NgModule } from "@angular/core";

import { BUSCAR_USUARIO_POR_ID_CONTROLLER } from "../../../../../domain/interfaces/controllers/usuario/buscar-usuario-por-id-controller.interface";
import { BuscarUsuarioPorIdControllerService } from "../../../../controllers/usuario/buscar-usuario-por-id-controller.service";

import { BUSCAR_USUARIO_POR_ID_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/buscar-usuario-por-id.use-case.interface";

import { BuscarUsuarioPorIdUseCase } from "../../../../../application/use-cases/usuario/buscar-usuario-por-id.use-case";

import { USUARIO_REPOSITORY } from "../../../../../domain/interfaces/repositories/usuario/usuario-repository.interface";

import { CrudUsuarioMockRepository } from "../../../../../data/repositories/usuario/crud-usuario-mock.repository";

@NgModule({
    providers: [
      { provide: BUSCAR_USUARIO_POR_ID_CONTROLLER, useClass: BuscarUsuarioPorIdControllerService },
      { provide: BUSCAR_USUARIO_POR_ID_USE_CASE, useClass: BuscarUsuarioPorIdUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioMockRepository },
    ],
  })
  export class BuscarUsuarioPorIdProvidersModule {}
