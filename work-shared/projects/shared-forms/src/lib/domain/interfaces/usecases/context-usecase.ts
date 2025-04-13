import { inject } from '@angular/core';
import { GlobalContextService } from '../../../presentation/view/shared/services/global-context.service';
import { CryptoService } from '../../../presentation/view/shared/services/crypto.service';
import { BehaviorSubject } from 'rxjs';

export abstract class IContextUseCase {
  protected globalContextService = inject(GlobalContextService);
  protected cryptoService = inject(CryptoService);
  private contextSource = new BehaviorSubject<any>({});
  protected context$ = this.contextSource.asObservable();
  protected context: any;
  abstract subscribeInContext(): void;
  abstract setContext(data: any): void;
  abstract getContext(): any;
}
