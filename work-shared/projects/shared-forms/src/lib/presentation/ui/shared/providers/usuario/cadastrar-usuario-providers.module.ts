import { NgModule } from "@angular/core";

import { CadastrarUsuarioControllerService } from "../../../../controllers/usuario/cadastrar-usuario-controller.service";

import { CADASTRAR_USUARIO_CONTROLLER } from "../../../../../domain/interfaces/controllers/usuario/cadastrar-usuario-controller.interface";
import { CADASTRAR_USUARIO_USE_CASE } from "../../../../../domain/interfaces/usecases/usuario/cadastrar-usuario.use-case.interface";
import { CadastrarUsuarioUseCase } from "../../../../../application/use-cases/usuario/cadastrar-usuario.use-case";
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
      { provide: CADASTRAR_USUARIO_CONTROLLER, useClass: CadastrarUsuarioControllerService },
      { provide: CADASTRAR_USUARIO_USE_CASE, useClass: CadastrarUsuarioUseCase },
      { provide: USUARIO_REPOSITORY, useClass: CrudUsuarioApiRestRepository },
    ],
  })
  export class CadastrarUsuarioProvidersModule {}