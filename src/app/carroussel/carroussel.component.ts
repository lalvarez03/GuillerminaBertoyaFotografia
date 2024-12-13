import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroussel',
  templateUrl: './carroussel.component.html',
  styleUrls: ['./carroussel.component.css']
})
export class CarrousselComponent implements OnInit {
  @Input() imagenes: string[] = [];
  indiceActual = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.imagenes);
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
  }

}
