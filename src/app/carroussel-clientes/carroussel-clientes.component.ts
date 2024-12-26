import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carroussel-clientes',
  templateUrl: './carroussel-clientes.component.html',
  styleUrls: ['./carroussel-clientes.component.css']
})
export class CarrousselClientesComponent implements OnInit {
  @Input() descripcion: [foto:string,nombre:string,descripcion:string][] = [];
  indiceActual = 0;

  constructor() { }

  ngOnInit() {
    console.log(this.descripcion);
    this.precargarImagenes();
  }
  
  precargarImagenes() {
    this.descripcion.forEach(src => {
      const img = new Image();
      img.src = src[0];
    });
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
