import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fotosClientesFelices, fotosHome, fotosPortfolio, linkMaps } from '../../environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  clase="Main";
  listaDeFotos!:string[];
  fotosLinks:string[]=[];
  listaFotosPortfolio!:string[];
  listaFotosClientes!:[src:string,cliente:string,descripcion:string][];
  linkMaps!:string;
  constructor(
    private router:Router
  ) { }

  async ngOnInit() {
      await this.setFotos()
    }
  
  setFotos(){
    this.listaDeFotos = fotosHome.map(foto => 
      'assets/' + this.clase + '/' + foto + '.jpg'
    );
    this.listaFotosPortfolio = fotosPortfolio.map(foto => 
      'assets/' + this.clase + '/Portfolio/' + foto + '.jpg'
    );
    this.listaFotosClientes = fotosClientesFelices.map(cliente => 
      ['assets/' + this.clase + '/Clientes/' + cliente[0] + '.jpg', cliente[1], cliente[2]]
    );
    this.fotosLinks.push(this.toLink("New_Born",fotosHome[4]));
    this.fotosLinks.push(this.toLink("Primer_anio",fotosHome[5]));
    this.fotosLinks.push(this.toLink("Embarazadas",fotosHome[6]));
    this.linkMaps = linkMaps;
  }

  toLink(carpeta:string,archivo:string):string{
    return 'assets/' + carpeta + '/' + archivo +'.jpg';
  }

  aNewBorn(){
    this.router.navigate(['newBorn'])
  }
  aPrimerAnio(){
    this.router.navigate(['primerAnio'])
  }
  aEmbarazadas(){
    this.router.navigate(['embarazadas'])
  }
}
