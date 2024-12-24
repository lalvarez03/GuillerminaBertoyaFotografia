import { Component, input, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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
}

