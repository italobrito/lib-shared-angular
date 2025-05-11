import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from 'rxjs';

export abstract class RepositoryAbstract<T, R> {
  protected abstract apiUrl: string;

  constructor(private http: HttpClient) {}

  cadastrar(entidade: T): Promise<T> {
    return firstValueFrom(this.http.post<T>(`${this.apiUrl}`, entidade));
  }

  atualizar(id: number, entidade: T): Promise<T> {
    return firstValueFrom(this.http.put<T>(`${this.apiUrl}/${id}`, entidade));
  }

  deletar(id: number): Promise<void> {
    return firstValueFrom(this.http.delete<void>(`${this.apiUrl}/${id}`));
  }

  listar(): Promise<R[]> {
    return firstValueFrom(this.http.get<R[]>(`${this.apiUrl}`));
  }

  buscarPorId(id: number): Promise<T> {
    return firstValueFrom(this.http.get<T>(`${this.apiUrl}/${id}`));
  }
}