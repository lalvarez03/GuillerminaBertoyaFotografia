import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { embarazadaLinks, fotosEmbarazadas } from '../environment';
import { Sesion } from '../sesion/sesion';

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
    this.linkPlata = embarazadaLinks.linkMercadopagoPackPlata;
    this.linkOro = embarazadaLinks.linkMercadopagoPackOro;
    this.linkPlatino = embarazadaLinks.linkMercadopagoPackPlatino;

    console.log(this.linkPlata)
  }
  
  setFotos(){
    this.listaDeFotos = fotosEmbarazadas.map(foto => 
      'assets/' + this.clase + '/' + foto + '.jpg'
    );
  }
}
