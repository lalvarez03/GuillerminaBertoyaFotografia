import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { fotosNewBorn, newBornLinks } from '../environment';
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
    this.linkPlata = newBornLinks.linkMercadopagoPackPlata;
    this.linkOro = newBornLinks.linkMercadopagoPackOro;
    this.linkPlatino = newBornLinks.linkMercadopagoPackPlatino;

    console.log(this.linkPlata)
  }

  setFotos(){
    this.listaDeFotos = fotosNewBorn.map(foto => 
      `assets/${this.clase}/${foto}.jpg`
    );
  }

}
