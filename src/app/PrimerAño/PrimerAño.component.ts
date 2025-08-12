import { Component, OnInit } from '@angular/core';
import { Sesion } from '../sesion/sesion';
import { fotosPrimerAnio, primerAnioLinks, primerAnioPrecios } from '../../environment';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-PrimerAño',
  templateUrl: './PrimerAño.component.html',
  styleUrls: ['./PrimerAño.component.css']
})
export class PrimerAñoComponent extends Sesion implements OnInit {
  clase="Primer_anio";
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
    this.linkPlata = primerAnioLinks.linkMercadopagoPackPlata;
    this.linkOro = primerAnioLinks.linkMercadopagoPackOro;
    this.linkPlatino = primerAnioLinks.linkMercadopagoPackPlatino;
    this.precioPlata = primerAnioPrecios.packPlata;
    this.precioOro = primerAnioPrecios.packOro;
    this.precioPlatino = primerAnioPrecios.packPlatino;

    console.log(this.linkPlata)
  }

  setFotos(){
      this.listaDeFotos = fotosPrimerAnio.map(foto => 
        `assets/${this.clase}/${foto}.jpg`
      );
  }
}
