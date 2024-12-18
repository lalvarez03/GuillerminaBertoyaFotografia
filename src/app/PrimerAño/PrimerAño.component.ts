import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Sesion } from '../sesion/sesion';
import { fotosPrimerAnio, primerAnioLinks } from '../environment';

@Component({
  selector: 'app-PrimerAño',
  templateUrl: './PrimerAño.component.html',
  styleUrls: ['./PrimerAño.component.css']
})
export class PrimerAñoComponent extends Sesion implements OnInit {
  clase="Primer_Anio";
  linkPlata!:string;
  linkOro!:string;
  linkPlatino!:string;
  listaDeFotos!:string[];
  constructor(
    private appService:AppService
  ) { super()}

  async ngOnInit() {
    this.setLinks();
    await this.setFotos();
    console.log(this.listaDeFotos)
  }

  setLinks(){
    this.linkPlata = primerAnioLinks.linkMercadopagoPackPlata;
    this.linkOro = primerAnioLinks.linkMercadopagoPackOro;
    this.linkPlatino = primerAnioLinks.linkMercadopagoPackPlatino;

    console.log(this.linkPlata)
  }

  setFotos(){
      this.listaDeFotos = fotosPrimerAnio.map(foto => 
        `assets/${this.clase}/${foto}.jpg`
      );
  }
}
