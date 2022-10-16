import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalParams } from 'src/app/modules/shared/services/modal/modal.model';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor() {}

  public modalCloseBehavior = new BehaviorSubject<boolean>(true);
  public modalOpenBehavior = new BehaviorSubject<ModalParams | null>(null);

  public open(modalParams: ModalParams): void {
    this.modalOpenBehavior.next(modalParams);
  }
  public close() {
    this.modalCloseBehavior.next(true);
  }
}
