import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalContextService {
  private contextSource = new BehaviorSubject<any>({});
  context$ = this.contextSource.asObservable();

  setContext(context: any) {
    this.contextSource.next(context);
  }

  getContext() {
    return this.contextSource.value;
  }
}
