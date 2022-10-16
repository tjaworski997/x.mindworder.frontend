import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService } from 'src/app/modules/shared/services/modal/modal.service';
import { ModalParams } from 'src/app/modules/shared/services/modal/modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ModalComponent implements OnInit {
  modalParams: ModalParams = {
    message: 'mess',
  };

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalOpenBehavior.subscribe((p) => {
      if (p) {
        this.modalParams = p;

        if (p.buttonCancel == undefined) this.modalParams.buttonCancel = true;
        if (p.buttonOk == undefined) this.modalParams.buttonOk = true;
        if (!p.buttonOkText) this.modalParams.buttonOkText = 'OK';
        if (!p.buttonCancelText) this.modalParams.buttonCancelText = 'Wróć';
      }
    });
  }

  cancelClick() {
    this.modalService.close();
    if (this.modalParams?.buttonCancelAction) {
      this.modalParams?.buttonCancelAction();
    }
  }

  okClick() {
    this.modalService.close();
    if (this.modalParams?.buttonOkAction) {
      this.modalParams?.buttonOkAction();
    }
  }
}
