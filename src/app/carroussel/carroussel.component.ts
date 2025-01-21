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

  async ngOnInit() {
    console.log(this.imagenes);
    await this.precargarImagenes();
}

precargarImagenes() {
  this.imagenes.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

siguiente() {
  this.indiceActual = (this.indiceActual + 1) % this.imagenes.length;
}

anterior() {
  this.indiceActual = (this.indiceActual - 1 + this.imagenes.length) % this.imagenes.length;
}

calcularProgreso():number{
  return (this.indiceActual+1)/this.imagenes.length*100
}
}
