import { Component, OnInit } from '@angular/core';
import { embarazadaLinks, embarazadasPrecios, fotosEmbarazadas } from '../../environment';
import { Sesion } from '../sesion/sesion';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-Embarazadas',
  templateUrl: './Embarazadas.component.html',
  styleUrls: ['./Embarazadas.component.css']
})
export class EmbarazadasComponent extends Sesion implements OnInit {
  clase="Embarazadas";
  linkPlata!:string;
  linkOro!:string;
  linkPlatino!:string;
  precioPlata!:string;
  precioOro!:string;
  precioPlatino!:string;
  listaDeFotos!:string[];
  constructor(
      modalService: NgbModal
    ){ super(modalService)}

  async ngOnInit() {
    this.setLinks();
    await this.setFotos();
    console.log(this.listaDeFotos)
  }

  setLinks(){
    this.linkPlata = embarazadaLinks.linkMercadopagoPackPlata;
    this.linkOro = embarazadaLinks.linkMercadopagoPackOro;
    this.linkPlatino = embarazadaLinks.linkMercadopagoPackPlatino;
    this.precioPlata = embarazadasPrecios.packPlata
    this.precioOro = embarazadasPrecios.packOro
    this.precioPlatino = embarazadasPrecios.packPlatino
  }
  
  setFotos(){
    this.listaDeFotos = fotosEmbarazadas.map(foto => 
      'assets/' + this.clase + '/' + foto + '.jpg'
    );
  }
}
