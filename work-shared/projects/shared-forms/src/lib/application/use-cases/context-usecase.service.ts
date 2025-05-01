import { Injectable } from '@angular/core';

import { IContextUseCase } from '../../domain/interfaces/usecases/context-usecase';

@Injectable({
  providedIn: 'root',
})
export class ContextUseCaseService extends IContextUseCase {
  subscribeInContext(): void {
    this.globalContextService.context$.subscribe((context) => {
      this.context = context;
    });
  }

  setContext(data: any): void {
    this.globalContextService.setContext(data);
  }

  getContext(): any {
    return this.globalContextService.getContext();
  }

  authFlow() {
    this.subscribeInContext();
    const valor = localStorage.getItem('authSessionMfeCoreErpS123');
    if (valor) {
      //TRECHO P TESTAR
      const result = this.cryptoService.decryptData(valor);
      console.log('Resultado no LIB - shared', result);
      //TRECHO P TESTAR
      let model = this.getContext();
      model.auth = {
        value: valor,
      };
      this.setContext(model);
      localStorage.removeItem('authSessionMfeCoreErpS123');
    }
  }
}
