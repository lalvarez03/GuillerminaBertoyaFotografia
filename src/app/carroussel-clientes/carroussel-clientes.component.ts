import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-carroussel-clientes',
  templateUrl: './carroussel-clientes.component.html',
  styleUrls: ['./carroussel-clientes.component.css']
})
export class CarrousselClientesComponent implements OnInit {
  @Input() descripcion: [string,string,string][] = [];
  @ViewChild('carruselContainer', { static: false }) carruselContainer!: ElementRef;
  indiceActual = 0;

  private startX!: number;
  private threshold: number = 100; // Umbral de deslizamiento en píxeles

  constructor() { }

  ngOnInit(): void { }

  @HostListener('touchstart', ['$event'])
  @HostListener('mousedown', ['$event'])
  onStart(event: TouchEvent | MouseEvent): void {
    this.startX = this.getClientX(event);
  }

  @HostListener('touchend', ['$event'])
  @HostListener('mouseup', ['$event'])
  onEnd(event: TouchEvent | MouseEvent): void {
    const endX = this.getClientX(event);
    const diffX = endX - this.startX;

    if (Math.abs(diffX) > this.threshold) {
      if (diffX > 0) {
        this.anterior();
      } else {
        this.siguiente();
      }
    }
  }

  private getClientX(event: TouchEvent | MouseEvent): number {
    return event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
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
