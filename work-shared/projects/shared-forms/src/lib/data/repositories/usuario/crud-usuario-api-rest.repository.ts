import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { Usuario, UsuarioFormulario } from "../../../domain/entities/usuario";
import { UsuarioRepositoryInterface } from "../../../domain/interfaces/repositories/usuario/usuario-repository.interface";
import { RepositoryAbstract } from "../repository-abstract";

@Injectable({ providedIn: 'root' })
export class CrudUsuarioApiRestRepository extends RepositoryAbstract<UsuarioFormulario, Usuario> implements UsuarioRepositoryInterface {
  protected apiUrl = 'http://localhost:8080/usuarios';

  constructor(http: HttpClient) {
    super(http);
  }

}