import { Component, input, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { cbu } from '../../environment';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() price: string = '';
  @Input() link: string = '';
  @Input() dateMin:string = '';
  @Input() dateMax:string = '';

  constructor(public activeModal: NgbActiveModal) {console.log(this.dateMin)}

  CBU = cbu

  copyToClipboard(): void {
    navigator.clipboard.writeText(this.CBU).then(() => {
      const snackbar = document.getElementById('snackbar');
      if (snackbar) {
        snackbar.className = 'snackbar show';
        setTimeout(() => {
          snackbar.className = snackbar.className.replace('show', '');
        }, 3000); // Duración del Snackbar
      }
    }).catch(err => {
      console.error('Error al copiar el CBU: ', err);
    });
  }
}

