import { Component, OnInit } from '@angular/core';
import { fotosNewBorn, newBornLinks, newBornPrecios } from '../environment';
import { Sesion } from '../sesion/sesion';

@Component({
  selector: 'app-NewBorn',
  templateUrl: './NewBorn.component.html',
  styleUrls: ['./NewBorn.component.css'],
})
export class NewBornComponent extends Sesion implements OnInit {
  clase="New_Born"
  linkPlata!:string;
  linkOro!:string;
  linkPlatino!:string;
  precioPlata!:string;
  precioOro!:string;
  precioPlatino!:string;
  listaDeFotos!:string[];
  constructor(
  ) { super()}

  async ngOnInit() {
    this.setLinks();
    await this.setFotos();
    console.log(this.listaDeFotos)
  }

  setLinks(){
    this.linkPlata = newBornLinks.linkMercadopagoPackPlata;
    this.linkOro = newBornLinks.linkMercadopagoPackOro;
    this.linkPlatino = newBornLinks.linkMercadopagoPackPlatino;
    this.precioPlata = newBornPrecios.packPlata
    this.precioOro = newBornPrecios.packOro
    this.precioPlatino = newBornPrecios.packPlatino
  }

  setFotos(){
    this.listaDeFotos = fotosNewBorn.map(foto => 
      `assets/${this.clase}/${foto}.jpg`
    );
  }

}
