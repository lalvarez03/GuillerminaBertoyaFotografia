import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroussel-clientes',
  templateUrl: './carroussel-clientes.component.html',
  styleUrls: ['./carroussel-clientes.component.css']
})
export class CarrousselClientesComponent implements OnInit {
  @Input() descripcion: [string,string,string][] = [];
  indiceActual = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.descripcion);
  }

  siguiente() {
    this.indiceActual = (this.indiceActual + 1) % this.descripcion.length;
  }

  anterior() {
    this.indiceActual = (this.indiceActual - 1 + this.descripcion.length) % this.descripcion.length;
  }

  calcularProgreso():number{
    return (this.indiceActual+1)/this.descripcion.length*100
  }
}
